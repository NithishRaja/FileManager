import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ImageFolderList from "./../components/imageViewer/imageFolderList";
import startImageListUpdate from "./../actions/startImageListUpdate";

const mapStateToProps = (state) => {
  return {
    imageList: state.imageList
  }
};

const mathcDispatchToProps = (dispatch) => {
  return bindActionCreators({startImageListUpdate}, dispatch);
}

export default connect(mapStateToProps, mathcDispatchToProps)(ImageFolderList);
