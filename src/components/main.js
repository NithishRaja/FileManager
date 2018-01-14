import React, { Component } from 'react';
import { Text, View, DrawerLayoutAndroid, Dimensions, StyleSheet, FlatList } from 'react-native';
import FileList from "./fileList";

const {width, height} = Dimensions.get("window");

export default class App extends Component{

  constructor(props){
    super(props);

  }

  _renderNavigationView(){
    return(<Text>Hello</Text>);
  }

  componentWillMount(){
    this._componentLayoutJSX = <DrawerLayoutAndroid
      drawerWidth={width-50}
      drawerPosition={DrawerLayoutAndroid.positions.left}
      renderNavigationView={this._renderNavigationView}
      >
      <View style={styles.container}>
        <View style={styles.header}><Text>FileManager</Text></View>
        <FileList fileList={this.props.fileList} />
      </View>
    </DrawerLayoutAndroid>
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
    padding: 10
  }
});
