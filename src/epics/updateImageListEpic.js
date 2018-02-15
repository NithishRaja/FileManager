import Rx from "rxjs/Rx";
import {CameraRoll} from "react-native";

function getAllPhotos(end_cursor){
  let object = null;
  let options = {first: 20};
  if(end_cursor){
    options.after = end_cursor;
  }

  return CameraRoll.getPhotos(options)
    .then(res => {
      if(res.page_info.has_next_page){
        object = getAllPhotos(res.page_info.end_cursor);
        return object.then(result => {
          return res.edges.concat(result);
        });
      }else{
        return res.edges;
      }
    })
    .finally(res => {
      return res;
    });
}

function quickGroup(array){
  let isGrouped = true;
  for(let i=0;i<array.length-1;++i){
    if(array[i].node.group_name!=array[0].node.group_name){
      isGrouped = false;
      break;
    }
  }
  if(!isGrouped){
    let notEqual = [], equal = [];
    for(let i=0;i<array.length;++i){
      if(array[i].node.group_name==array[0].node.group_name){
        equal.push(array[i]);
      }else{
        notEqual.push(array[i]);
      }
    }
    equal = {images: equal};
    notEqual = quickGroup(notEqual);
    return [equal].concat(notEqual);
  }else{
    return {images: array};
  }
}

function simplify(array){
  for(let i=0;i<array.length;++i){
    array[i].group_name = array[i].images[0].node.group_name;
    for(let j=0;j<array[i].images.length;++j){
      array[i].images[j] = {
        uri: array[i].images[j].node.image.uri,
        height: array[i].images[j].node.image.height,
        width: array[i].images[j].node.image.width
      };
    }
  }
  return array;
}

export default function(action$){
  return action$.ofType("START_IMAGE_LIST_UPDATE")
    .mergeMap(action => {
      return getAllPhotos();
    })
    .map(response => {
      response = quickGroup(response);
      response = simplify(response);
      console.log(response);
      return {type: "UPDATE_IMAGE_LIST", payload: response};
    });
}
