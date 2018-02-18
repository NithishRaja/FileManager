import { StackNavigator } from 'react-navigation';
import ImageFolderList from "./../../containers/imageFolderListContainer";
import ImageFileList from "./imageFileList";
import SelectedImage from "./selectedImage";

const ImageViewer = StackNavigator({
  Home: {
    screen: ImageFolderList,
    navigationOptions: {
      title: "Gallery"
    }
   },
  Files: {
    screen: ImageFileList
  },
  Image: {
    screen: SelectedImage
  }
});

export default ImageViewer;
