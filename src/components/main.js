import React, { Component } from 'react';
import { Text, View, DrawerLayoutAndroid, Dimensions, StyleSheet, FlatList } from 'react-native';

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
      <View>
        <FlatList
          data={this.props.fileList}
          keyExtractor={(file, index) => index}
          renderItem={(file) => <View><Text>{file.item}</Text></View>}
          />
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

});
