import RNFS from "react-native-fs";
import Rx from "rxjs/Rx";

export default function(action$){
  return action$.ofType("START_FILE_LIST_UPDATE")
    .mergeMap(action => {
      const path = action.payload.join("/");
      return RNFS.readDir(path)
        .then((result) => {
          return Rx.Observable.of(result);
        });
    })
    .pluck("value")
    .map(response => {
      // removing system and private directories
      response = response.filter(object => {
        if(object.name==="UDiskA"||object.name==="Private"){
          return false;
        }else{
          return true;
        }
      }).map(object => {
        // adding file types for each file
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
      // pushing all files to the bottom
      for(let i=0;i<response.length;++i){
        if(response[i].isFile){
          for(let j=i;j<response.length;++j){
            if(response[j].isDirectory){
              let temp = response[i];
              response[i] = response[j];
              response[j] = temp;
              break;
            }
          }
        }
      }
      // sorting directories and files based on name
      for(let i=0;i<response.length;++i){
        // sorting directories separately
        if(response[i].isDirectory){
          let name = response[i].name;
          let pos = i;
          for(let j=i+1;j<response.length;++j){
            let k=0;
            if(response[j].isDirectory){
              while(k<name.length&&k<response[j].name.length){
                if(name[k].toString().toLowerCase()>response[j].name[k].toString().toLowerCase()){
                  name = response[j].name;
                  pos = j;
                  break;
                }else if(name[k].toString().toLowerCase()===response[j].name[k].toString().toLowerCase()){
                  ++k;
                }else{
                  break;
                }
              }
            }
          }
          if(pos!==i){
            let temp = response[pos];
            response[pos] = response[i];
            response[i] = temp;
          }
        }
        // sorting files separately
        if(response[i].isFile){
          let name = response[i].name;
          let pos = i;
          for(let j=i+1;j<response.length;++j){
            let k=0;
            if(response[j].isFile){
              while(k<name.length&&k<response[j].name.length){
                if(name[k].toString().toLowerCase()>response[j].name[k].toString().toLowerCase()){
                  name = response[j].name;
                  pos = j;
                  break;
                }else if(name[k].toString().toLowerCase()===response[j].name[k].toString().toLowerCase()){
                  ++k;
                }else{
                  break;
                }
              }
            }
          }
          if(pos!==i){
            let temp = response[pos];
            response[pos] = response[i];
            response[i] = temp;
          }
        }
      }
      return {type:"UPDATE_FILE_LIST", payload:response};
    });
}
