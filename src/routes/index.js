import { StackNavigator } from 'react-navigation';
import Main from "./../containers/mainContainer";
import ImageViewer from "./../containers/imageViewerContainer";

export default App = StackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      headerTitle: 'FileManager'
    }
  },
  Image: {
    screen: ImageViewer,
    navigationOptions: {
      headerTitle: 'Image'
    }
  }
});
