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

export default function(action$){
  return action$.ofType("START_IMAGE_LIST_UPDATE")
    .mergeMap(action => {
      return getAllPhotos();
    })
    .map(response => {
      return {type: "UPDATE_IMAGE_LIST", payload: response};
    });
}
