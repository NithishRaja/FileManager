import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Main from "./../components/main";

const mapStateToProps = (state) => {
  return {
    fileList: state.fileList
  }
};

const mathcDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mathcDispatchToProps)(Main);
