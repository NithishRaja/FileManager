import RNFS from "react-native-fs";
import Rx from "rxjs/Rx";

export default function(action$){
  return action$.ofType("START_FILE_LIST_UPDATE")
    .mergeMap(action => {
      return RNFS.readDir(RNFS.ExternalStorageDirectoryPath)
        .then((result) => {
          console.log(result);
          return Rx.Observable.Of(result);
        });
    })
    .pluck("value")
    .map(response => {
      console.log(response);
      return {type:"UPDATE_FILE_LIST", payload:[
        'name1',
        'name2',
        'name3'
      ]};
    });
}
