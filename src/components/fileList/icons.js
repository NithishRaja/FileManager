import React, {Component} from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { crossResponsiveWidth, crossResponsiveHeight } from "react-native-cross-platform-responsive-dimensions";

export default class Icons extends Component{

  constructor(props){
    super(props);

    this.state = {
      image: RegExp("\.(jpeg|jpg|png|bmp|raw)$", "i"),
      audio: RegExp("\.(wav|mp3|wma)$", "i"),
      video: RegExp("\.(wmv|mov|mkv|mp4|flv)$", "i"),
      text: RegExp("\.(txt)$", "i")
    };

    this._plainFolderJSX = <Icon name="folder" size={50} />;

    this._plainFileJSX = <Icon name="news" size={50} />;

    this._audioFileJSX = <Icon name="music" size={50} />;

    this._imageFileJSX = <Icon name="image-inverted" size={50} />;

    this._textFileJSX = <Icon name="text-document-inverted" size={50} />;

    this._videoFileJSX = <Icon name="video" size={50} />;

    this._unknownObjectJSX = <Icon name="traffic-cone" size={50} />;

  }

  _updateComponentLayout(props, state){
    if(props.isDirectory){
      this._componentLayoutJSX = this._plainFolderJSX;
    }else if(props.isFile){
      if(props.type==="image"){
        this._componentLayoutJSX = this._imageFileJSX;
      }else if(props.type==="audio"){
        this._componentLayoutJSX = this._audioFileJSX;
      }else if(props.type==="video"){
        this._componentLayoutJSX = this._videoFileJSX;
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
  icon:{
    width: crossResponsiveWidth(10, 10, 10, 10),
    height: crossResponsiveHeight(10, 10, 10, 10)
  }
});
