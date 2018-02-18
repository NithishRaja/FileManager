import { StackNavigator } from 'react-navigation';
import ImageFolderList from "./../../containers/imageFolderListContainer";
import ImageFileList from "./imageFileList";
import SelectedImage from "./selectedImage";

const ImageViewer = StackNavigator({
  Home: {
    screen: ImageFolderList,
    navigationOptions: {
      title: "Gallery",
      headerStyle: {
        backgroundColor: 'rgba(255, 100, 0, 0.7)'
      },
      headerTintColor: 'rgb(150, 80, 10)'
    }
   },
  Files: {
    screen: ImageFileList,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(255, 100, 0, 0.7)'
      },
      headerTintColor: 'rgb(150, 80, 10)'
    }
  },
  Image: {
    screen: SelectedImage,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(255, 100, 0, 0.3)',
        elevation: 5
      },
      headerTintColor: 'rgb(150, 80, 10)'
    }
  }
});

export default ImageViewer;
