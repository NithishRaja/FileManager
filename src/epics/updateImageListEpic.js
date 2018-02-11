import Rx from "rxjs/Rx";
import {CameraRoll} from "react-native";

function getAllPhotos(end_cursor){
  let object = null;
  if(end_cursor){
    var options = {
      first: 20, after: end_cursor
    };
  }else{
    options = {
      first: 20
    }
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
    notEqual = quickGroup(notEqual);
    return equal.concat(notEqual);
  }else{
    return array;
  }
}

export default function(action$){
  return action$.ofType("START_IMAGE_LIST_UPDATE")
    .mergeMap(action => {
      return getAllPhotos();
    })
    .map(response => {
      response = quickGroup(response);
      response.forEach(r => console.log(r.node.group_name););
      return {type: "UPDATE_IMAGE_LIST", payload: response};
    });
}
