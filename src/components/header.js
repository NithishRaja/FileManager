import React, {Component} from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { crossResponsiveWidth, crossPlatformDevice, crossResponsiveFontSize } from "react-native-cross-platform-responsive-dimensions";

export default class Header extends Component{

  constructor(props){
    super(props);

  }

  _updateComponentLayout(props){
    this._componentLayoutJSX = <View style={styles.header}>
      <Text style={styles.headerText}>FileManager</Text>
    </View>;
  }

  componentWillMount(){
    this._updateComponentLayout(this.props);
  }

  componentWillUpdate(nextProps){
    this._updateComponentLayout(nextProps);
  }

  render(){
    return(
      this._componentLayoutJSX
    );
  }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(255, 100, 0, 0.7)',
    flexDirection: 'row',
    padding: 18,
    elevation: crossPlatformDevice(0, 0, 3, 0),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: crossResponsiveFontSize(3, 3, 3, 3)
  }
});
