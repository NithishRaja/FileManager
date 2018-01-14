import React, {Component} from "react";
import { Image, StyleSheet } from "react-native";

export default class Icon extends Component{

  constructor(props){
    super(props);

    this._plainFolderJSX = <Image source={require("./../../../static/images/icons/folder.png")} style={styles.icon} />;

    this._plainFileJSX = <Image source={require("./../../../static/images/icons/file.png")} style={styles.icon} />;

    this._unknownObjectJSX = <Image source={require("./../../../static/images/icons/unknown.png")} style={styles.icon} />;

  }

  componentWillMount(){
    if(this.props.isDirectory){
      this._componentLayoutJSX = this._plainFolderJSX;
    }else if(this.props.isFile){
      this._componentLayoutJSX = this._plainFileJSX;
    }else{
      this._componentLayoutJSX = this._unknownObjectJSX;
    }
  }

  componentWillUpdate(nextProps){
    if(nextProps.isDirectory){
      this._componentLayoutJSX = this._plainFolderJSX;
    }else if(nextProps.isFile){
      this._componentLayoutJSX = this._plainFileJSX;
    }else{
      this._componentLayoutJSX = this._unknownObjectJSX;
    }
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
