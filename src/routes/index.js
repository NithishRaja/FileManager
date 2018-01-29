import { StackNavigator } from 'react-navigation';
import Main from "./../containers/mainContainer";
import ImageViewer from "./../containers/imageViewerContainer";
import Header from "./../components/header";
import {View, Text} from "react-native";
import React from "react";

export default App = StackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      title: "FileManager",
      header: ({navigation}) => {
        return <Header navigation={navigation} />;
      },
      headerRight: () => {
        return <View><Text>{"right"}</Text></View>
      }
    }
  },
  Image: {
    screen: ImageViewer,
    navigationOptions: {
      headerTitle: 'Image'
    }
  },
  Settings: {
    screen: () => {
      return <View><Text>hello</Text></View>;
    },
    navigationOptions: {
      headerTitle: 'Settings'
    }
  }
});
