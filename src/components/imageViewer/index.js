import { StackNavigator } from 'react-navigation';
import imageFolderList from "./../../containers/imageFolderListContainer";

const ImageViewer = StackNavigator({
  Home: {
    screen: imageFolderList,
    navigationOptions: {
      title: "Gallery"
    }
   },
});

export default ImageViewer;
