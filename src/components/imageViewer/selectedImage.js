import React, {Component} from "react";
import {Image} from "react-native";

export default class SelectedImage extends Component{
  constructor(props){
    super(props);

  }

  render(){
    const {params} = this.props.navigation.state;
    return(
      <Image source={{uri:params.data.uri}} style={{height: params.data.height, width: params.data.width}} />
    );
  }
}
