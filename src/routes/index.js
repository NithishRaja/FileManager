import { DrawerNavigator } from 'react-navigation';
import Main from "./../containers/mainContainer";
import ImageViewer from "./../components/imageViewer";
import {View, Text} from "react-native";
import React from "react";

export default App = DrawerNavigator({
  Directories: {
    screen: Main,
    navigationOptions: {
      drawerLabel: "Directories"
    }
  },
  Gallery: {
    screen: ImageViewer,
    navigationOptions: {
      drawerLabel: "Gallery"
    }
  }
});
