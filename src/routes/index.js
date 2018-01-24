import { DrawerNavigator } from 'react-navigation';
import Main from "./../containers/mainContainer";

export default App = DrawerNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      drawerLabel: 'Directories'
    }
   }
});
