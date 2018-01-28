import React, {Component} from "react";
import { StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { crossResponsiveWidth, crossResponsiveHeight, crossPlatformDevice } from "react-native-cross-platform-responsive-dimensions";
import RNFS from "react-native-fs";

export default class Icons extends Component{

  constructor(props){
    super(props);

    this.state = {
      image: RegExp("\.(jpeg|jpg|png|bmp|raw)$", "i"),
      audio: RegExp("\.(wav|mp3|wma)$", "i"),
      video: RegExp("\.(wmv|mov|mkv|mp4|flv)$", "i"),
      text: RegExp("\.(txt)$", "i")
    };

    this._plainFolderJSX = <Icon name="folder" size={crossPlatformDevice(50, 50, 50, 50)} />;

    this._plainFileJSX = <Icon name="news" size={crossPlatformDevice(50, 50, 50, 50)} />;

    this._audioFileJSX = <Icon name="music" size={crossPlatformDevice(50, 50, 50, 50)} />;

    this._imageFileJSX = <Icon name="image-inverted" size={crossPlatformDevice(50, 50, 50, 50)} />;

    this._textFileJSX = <Icon name="text-document-inverted" size={crossPlatformDevice(50, 50, 50, 50)} />;

    this._videoFileJSX = <Icon name="video" size={crossPlatformDevice(50, 50, 50, 50)} />;

    this._unknownObjectJSX = <Icon name="traffic-cone" size={crossPlatformDevice(50, 50, 50, 50)} />;

  }

  _updateComponentLayout(props, state){
    if(props.isDirectory){
      this._componentLayoutJSX = this._plainFolderJSX;
    }else if(props.isFile){
      if(props.type==="image"){
        this._componentLayoutJSX = <Image source={{uri:`file://${props.path}`}} style={styles.imageIcon} />;
      }else if(props.type==="audio"){
        this._componentLayoutJSX = this._audioFileJSX;
      }else if(props.type==="video"){
        this._componentLayoutJSX = <Image source={{uri:`file://${props.path}`}} style={styles.videoIcon} />;
      }else if(props.type==="text"){
        this._componentLayoutJSX = this._textFileJSX;
      }else{
        this._componentLayoutJSX = this._plainFileJSX;
      }
    }else{
      this._componentLayoutJSX = this._unknownObjectJSX;
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
  imageIcon: {
    width: crossResponsiveWidth(10, 10, 10, 10),
    height: crossResponsiveHeight(9, 9, 9, 9)
  },
  videoIcon: {
    width: crossResponsiveWidth(20, 20, 20, 20),
    height: crossResponsiveHeight(8, 8, 8, 8)
  }
});
