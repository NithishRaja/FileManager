import React, { Component } from 'react';
import { Text, View, DrawerLayoutAndroid, StyleSheet, FlatList, TouchableNativeFeedback, Image, Alert } from 'react-native';
import FileList from "./fileList";
import { crossResponsiveWidth } from "react-native-cross-platform-responsive-dimensions";

export default class App extends Component{
  constructor(props){
    super(props);

  }

  _updateComponentLayout(props){
    const { navigate } = props.navigation;
    this._componentLayoutJSX = <View style={styles.container}>
      <FileList navigate={navigate} startFileListUpdate={props.startFileListUpdate} updateSelectedImage={props.updateSelectedImage} currentPath={props.currentPath} fileList={props.fileList} />
    </View>;
  }

  componentWillMount(){
    if(this.props.fileList.payload===null){
      this.props.startFileListUpdate(this.props.currentPath);
    }
    this._updateComponentLayout(this.props);
  }

  componentWillUpdate(nextProps){
    this._updateComponentLayout(nextProps);
  }

  render(){
    return (
      this._componentLayoutJSX
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: crossResponsiveWidth(100, 100, 100, 100),
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});
