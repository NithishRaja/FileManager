import React, {Component} from "react";
import { Image, View, TouchableNativeFeedback, Text, StyleSheet, Dimensions, Alert } from "react-native";

const {width, height} = Dimensions.get("window");

export default class Header extends Component{

  constructor(props){
    super(props);

  }

  _updateComponentLayout(props){
    this._componentLayoutJSX = <View style={styles.header}>
      <TouchableNativeFeedback
        onPress={() => {
          if(props.currentPath.length>1){
            props.currentPath.pop();
            props.startFileListUpdate(props.currentPath);
          }else{
            Alert.alert("Inside root directory. Cannot go back");
          }
        }}
        background={TouchableNativeFeedback.SelectableBackground()}
        >
        <View style={styles.headerIconContainer}>
          <Image source={require("./../../static/images/icons/back.png")} style={styles.headerIcon} />
        </View>
      </TouchableNativeFeedback>
      <Text>FileManager</Text>
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
