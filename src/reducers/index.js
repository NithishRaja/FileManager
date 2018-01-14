import {combineReducers} from "redux";
import fileList from "./fileListReducer";

const allReducers = combineReducers({
  fileList
});

export default allReducers;
