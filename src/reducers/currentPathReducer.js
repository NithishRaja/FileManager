import RNFS from "react-native-fs";

export default function(state=[RNFS.ExternalStorageDirectoryPath+"/../.."], action){
  switch(action.type){
    case "START_FILE_LIST_UPDATE":
      return action.payload;
    default:
      return state;
  }
}
