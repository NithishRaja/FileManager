import React, {Component} from "react";
import {View, Text, Image, Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

export default class ImageViewer extends Component{
  constructor(props){
    super(props);

    this._defaultImageJSX = <Image source={require("./../../static/images/image.png")} style={{height:height, width:width}} />

  }

  render(){
    return(
      this._defaultImageJSX
    );
  }

}
