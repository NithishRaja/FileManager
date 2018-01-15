import {combineReducers} from "redux";
import fileList from "./fileListReducer";
import currentPath from "./currentPathReducer";

const allReducers = combineReducers({
  fileList,
  currentPath
});

export default allReducers;
