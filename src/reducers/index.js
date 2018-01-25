import {combineReducers} from "redux";
import fileList from "./fileListReducer";
import currentPath from "./currentPathReducer";
import selectedImage from "./selectedImageReducer";

const allReducers = combineReducers({
  fileList,
  currentPath,
  selectedImage
});

export default allReducers;
