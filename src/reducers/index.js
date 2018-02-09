import {combineReducers} from "redux";
import fileList from "./fileListReducer";
import currentPath from "./currentPathReducer";
import imageList from "./imageListReducer";

const allReducers = combineReducers({
  fileList,
  currentPath,
  imageList
});

export default allReducers;
