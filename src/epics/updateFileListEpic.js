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
      response = response.map(object => {
        return {
          name: object.name,
          path: object.path,
          isFile: object.isFile(),
          isDirectory: object.isDirectory()
        }
      });
      console.log(response);
      return {type:"UPDATE_FILE_LIST", payload:response};
    });
}
