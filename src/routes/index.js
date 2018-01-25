import { DrawerNavigator } from 'react-navigation';
import Main from "./../containers/mainContainer";
import ImageViewer from "./../containers/imageViewerContainer";

export default App = DrawerNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      drawerLabel: 'Directories'
    }
  },
  Image: {
    screen: ImageViewer,
    navigationOptions: {
      drawerLabel: 'Images'
    }
  }
});
