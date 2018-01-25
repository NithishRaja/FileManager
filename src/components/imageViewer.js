import React, {Component} from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");

export default class ImageViewer extends Component{
  constructor(props){
    super(props);

    this._defaultImageJSX = <Image source={require("./../../static/images/image.png")} style={styles.image} />

  }

  _updateComponentLayout(props, state){
    const path = props.selectedImage.path.split("/").map((dir) => {
      if(RegExp(" ").test(dir)){
        return `"${dir}"`;
      }else{
        return dir
      }
    }).join("/");
    if(props.selectedImage!==null){
      this._componentLayoutJSX = <Image source={{uri:`file://${path}`}} style={styles.image} />;
    }else{
      this._componentLayoutJSX = this._defaultImageJSX;
    }
  }

  componentWillMount(){
    this._updateComponentLayout(this.props, this.state);
  }

  componentWillUpdate(nextProps, nextState){
    this._updateComponentLayout(nextProps, nextState);
  }

  render(){
    return(
      this._componentLayoutJSX
    );
  }

}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height
  }
});
