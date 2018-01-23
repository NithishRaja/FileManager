import React, { Component } from 'react';
import { Text, View, DrawerLayoutAndroid, Dimensions, StyleSheet, FlatList, TouchableNativeFeedback, Image, Alert } from 'react-native';
import FileList from "./fileList";
import Header from "./header";
import Nav from "./nav";

const {width, height} = Dimensions.get("window");

export default class App extends Component{

  static navigationOptions = {
    title: 'FileManager',
  };

  constructor(props){
    super(props);

  }

  _renderNavigationView(){
    return(
      <Nav />
    );
  }

  _updateComponentLayout(props){
    this._componentLayoutJSX = <DrawerLayoutAndroid
      drawerWidth={width-50}
      drawerPosition={DrawerLayoutAndroid.positions.left}
      renderNavigationView={this._renderNavigationView}
      >
      <View style={styles.container}>
        <FileList startFileListUpdate={props.startFileListUpdate} currentPath={props.currentPath} fileList={props.fileList} />
      </View>
    </DrawerLayoutAndroid>;
  }

  componentWillMount(){
    if(this.props.fileList===null){
      this.props.startFileListUpdate(this.props.currentPath);
    }
    this._updateComponentLayout(this.props);
  }

  componentWillUpdate(nextProps){
    this._updateComponentLayout(nextProps);
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      this._componentLayoutJSX
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});
