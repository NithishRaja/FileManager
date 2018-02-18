import React, {Component} from "react";
import {View, Text, FlatList, Image, TouchableNativeFeedback, StyleSheet} from "react-native";

export default class ImageFileList extends Component{
  constructor(props){
    super(props);

  }

  render(){
    const {navigate} = this.props.navigation;
    const {params} = this.props.navigation.state;
    return(
      <FlatList
        data={params.data.images}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <TouchableNativeFeedback
        onPress={event => {
          navigate("Image", {data: item});
        }}
        background={TouchableNativeFeedback.SelectableBackground()}
          >
          <View><Image source={{uri:item.uri}} style={{height: 100, width: 100}} /></View>
        </TouchableNativeFeedback>}
       />
    );
  }
}
