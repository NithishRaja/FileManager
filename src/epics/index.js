import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateFileListEpic from "./updateFileListEpic";

const allEpics = combineEpics(
  updateFileListEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
