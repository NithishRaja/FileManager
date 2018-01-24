import { DrawerNavigator } from 'react-navigation';
import Main from "./../containers/mainContainer";
import ImageViewer from "./../components/imageViewer";

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
