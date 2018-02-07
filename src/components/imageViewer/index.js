import React, {Component} from "react";
import { View, Text, Image, FlatList, Dimensions, StyleSheet } from "react-native";
import { crossResponsiveWidth, crossResponsiveHeight } from "react-native-cross-platform-responsive-dimensions";

export default class ImageViewer extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: ["image1", "image2", "image3"]
    }

    this._defaultImageJSX = <Image source={require("./../../static/images/image.png")} style={styles.image} />

  }

  _updateComponentLayout(props, state){
    _componentLayoutJSX = <FlatList
      data={state.data}
      keyExtractor={(file, index) => return index}
      renderItem={({item}) => <View><Text>{item}</Text></View>}
      ListEmptyComponent={() => <View><Text>No photos found.</Text></View>} />;
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
    width: crossResponsiveWidth(100, 100, 100 ,100),
    height: crossResponsiveHeight(90, 90, 90, 90)
  }
});
