import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Main from "./../components/main";
import startFileListUpdate from "./../actions/startFileListUpdate";
import updateCurrentPath from "./../actions/updateCurrentPath";

const mapStateToProps = (state) => {
  return {
    fileList: state.fileList,
    currentPath: state.currentPath
  }
};

const mathcDispatchToProps = (dispatch) => {
  return bindActionCreators({startFileListUpdate, updateCurrentPath}, dispatch);
};

export default connect(mapStateToProps, mathcDispatchToProps)(Main);
