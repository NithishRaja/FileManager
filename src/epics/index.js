import { combineEpics, createEpicMiddleware } from "redux-observable";
import updateFileListEpic from "./updateFileListEpic";
import updateImageListEpic from "./updateImageListEpic";

const allEpics = combineEpics(
  updateFileListEpic,
  updateImageListEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
