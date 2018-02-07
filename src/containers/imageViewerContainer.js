import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ImageViewer from "./../components/imageViewer";

const mapStateToProps = (state) => {
  return {
    
  }
};

const mathcDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mathcDispatchToProps)(ImageViewer);
