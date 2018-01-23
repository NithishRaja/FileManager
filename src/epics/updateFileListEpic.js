import RNFS from "react-native-fs";
import Rx from "rxjs/Rx";

export default function(action$){
  return action$.ofType("START_FILE_LIST_UPDATE")
    .mergeMap(action => {
      console.log(action);
      const path = action.payload.join("/");
      console.log(path);
      return RNFS.readDir(path)
        .then((result) => {
          return Rx.Observable.of(result);
        });
    })
    .pluck("value")
    .map(response => {
      response = response.filter(object => {
        if(object.name==="UDiskA"||object.name==="Private"){
          return false;
        }else{
          return true;
        }
      }).map(object => {
        let fileType = {
          image: RegExp("\.(jpeg|jpg|png|bmp|raw)$", "i"),
          audio: RegExp("\.(wav|mp3|wma)$", "i"),
          video: RegExp("\.(wmv|mov|mkv|mp4|flv)$", "i"),
          text: RegExp("\.(txt)$", "i")
        };
        let type = null;
        if(fileType.image.test(object.name)){
          type="image";
        }else if(fileType.audio.test(object.name)){
          type="audio";
        }else if(fileType.video.test(object.name)){
          type="video";
        }else if(fileType.image.test(object.name)){
          type="text";
        }
        return {
          name: object.name,
          path: object.path,
          isFile: object.isFile(),
          isDirectory: object.isDirectory(),
          type: type
        }
      });
      console.log(response);
      return {type:"UPDATE_FILE_LIST", payload:response};
    });
}
