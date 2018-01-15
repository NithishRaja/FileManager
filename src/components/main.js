import React, { Component } from 'react';
import { Text, View, DrawerLayoutAndroid, Dimensions, StyleSheet, FlatList, TouchableNativeFeedback, Image, Alert } from 'react-native';
import FileList from "./fileList";

const {width, height} = Dimensions.get("window");

export default class App extends Component{

  constructor(props){
    super(props);

  }

  _renderNavigationView(){
    return(<Text>Hello</Text>);
  }

  _updateComponentLayout(props){
    this._componentLayoutJSX = <DrawerLayoutAndroid
      drawerWidth={width-50}
      drawerPosition={DrawerLayoutAndroid.positions.left}
      renderNavigationView={this._renderNavigationView}
      >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableNativeFeedback
            onPress={() => Alert.alert("back")}
            background={TouchableNativeFeedback.SelectableBackground()}
            >
            <View style={styles.headerIconContainer}>
              <Image source={require("./../../static/images/icons/back.png")} style={styles.headerIcon} />
            </View>
          </TouchableNativeFeedback>
          <Text>FileManager</Text>
        </View>
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
  },
  header: {
    backgroundColor: 'rgb(255, 100, 0)',
    width: width,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
  },
  headerIconContainer: {
    paddingRight: 10
  },
  headerIcon: {
    width: 20,
    height: 20
  }
});
