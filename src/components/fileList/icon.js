import React, {Component} from "react";
import { Image, StyleSheet } from "react-native";

export default class Icon extends Component{

  constructor(props){
    super(props);

    this.state = {
      image: RegExp("\.(jpeg|jpg|png|bmp|raw)$", "i"),
      audio: RegExp("\.(wav|mp3|wma)$", "i"),
      video: RegExp("\.(wmv|mov|mkv|mp4|flv)$", "i"),
      text: RegExp("\.(txt)$", "i")
    };

    this._plainFolderJSX = <Image source={require("./../../../static/images/icons/folder.png")} style={styles.icon} />;

    this._plainFileJSX = <Image source={require("./../../../static/images/icons/file.png")} style={styles.icon} />;

    this._audioFileJSX = <Image source={require("./../../../static/images/icons/audio.png")} style={styles.icon} />;

    this._imageFileJSX = <Image source={require("./../../../static/images/icons/image.png")} style={styles.icon} />;

    this._textFileJSX = <Image source={require("./../../../static/images/icons/text.png")} style={styles.icon} />;

    this._videoFileJSX = <Image source={require("./../../../static/images/icons/video.png")} style={styles.icon} />;

    this._unknownObjectJSX = <Image source={require("./../../../static/images/icons/unknown.png")} style={styles.icon} />;

  }

  _updateComponentLayout(props, state){
    if(props.isDirectory){
      this._componentLayoutJSX = this._plainFolderJSX;
    }else if(props.isFile){
      if(state.image.test(props.name)){
        this._componentLayoutJSX = this._imageFileJSX;
      }else if(state.audio.test(props.name)){
        this._componentLayoutJSX = this._audioFileJSX;
      }else if(state.video.test(props.name)){
        this._componentLayoutJSX = this._videoFileJSX;
      }else if(state.text.test(props.name)){
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
    width: 50,
    height: 50
  }
});
