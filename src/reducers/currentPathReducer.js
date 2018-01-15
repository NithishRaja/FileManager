import RNFS from "react-native-fs";

export default function(state=[RNFS.ExternalStorageDirectoryPath+"/../.."], action){
  switch(action.type){
    case "UPDATE_CURRENT_PATH":
      return action.payload;
    case "START_FILE_LIST_UPDATE":
      return action.payload;
    default:
      return state;
  }
}
