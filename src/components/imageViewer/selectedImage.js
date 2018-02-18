import React, {Component} from "react";
import {Image, View, StyleSheet} from "react-native";
import { crossResponsiveWidth, crossResponsiveHeight } from "react-native-cross-platform-responsive-dimensions";

export default class SelectedImage extends Component{
  constructor(props){
    super(props);

  }

  render(){
    const {params} = this.props.navigation.state;
    const image = {
      aspectRatio: params.data.width/params.data.height,
      width: crossResponsiveWidth(100, 100, 100, 100),
    };
    console.log(params);
    return(
      <View style={styles.imageContainer}><Image source={{uri:params.data.uri}} style={image} /></View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    width: crossResponsiveWidth(100, 100, 100, 100),
    height: crossResponsiveHeight(90, 90, 90, 90),
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center'
  }
});
