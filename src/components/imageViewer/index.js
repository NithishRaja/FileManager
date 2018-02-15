import React, {Component} from "react";
import { View, Text, Image, FlatList, Dimensions, TouchableNativeFeedback, Alert, StyleSheet } from "react-native";
import { crossResponsiveWidth, crossResponsiveHeight } from "react-native-cross-platform-responsive-dimensions";
import Header from "./header";

export default class ImageViewer extends Component{
  constructor(props){
    super(props);

  }

  _updateComponentLayout(props, state){
    this._componentLayoutJSX = (
      <View>
      <Header />
      <FlatList
        data={props.imageList.payload}
        onRefresh={() => props.startImageListUpdate()}
        refreshing={props.imageList.status}
        keyExtractor={(file, index) => index}
        renderItem={({item}) => {
          return(
            <TouchableNativeFeedback
            onPress={event => {
              Alert.alert(item.group_name);
            }}
            background={TouchableNativeFeedback.SelectableBackground()}
              >
              <View style={styles.folder}>
                <View style={styles.imageContainer}>
                  <Image source={{uri:item.images[0].uri}} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                  <Text>{item.group_name}</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          );
        }}
        ListEmptyComponent={() => <View><Text>No photos found.</Text></View>}
        numColumns={2}
        columnWrapperStyle={styles.column}
        />
        </View>
    );
  }

  componentWillMount(){
    if(this.props.imageList.payload===null){
      this.props.startImageListUpdate();
    }
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
    width: crossResponsiveWidth(40, 40, 40 ,40),
    height: crossResponsiveHeight(20, 20, 20, 20)
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    backgroundColor: "rgba(100, 100, 100 ,0.4)",
  },
  folder: {
    borderRightColor: "rgba(200, 200, 200 ,0.4)",
    borderRightWidth: 2,
    width: crossResponsiveWidth(45, 45, 45 ,45),
  },
  column: {
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  }
});
