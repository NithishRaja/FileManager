import React, {Component} from "react";
import {View, Text, FlatList, Image, TouchableNativeFeedback, StyleSheet} from "react-native";
import { crossResponsiveWidth, crossResponsiveHeight } from "react-native-cross-platform-responsive-dimensions";

export default class ImageFileList extends Component{

  constructor(props){
    super(props);

  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.data.group_name
  });

  render(){
    const {navigate} = this.props.navigation;
    const {params} = this.props.navigation.state;
    return(
      <FlatList
        data={params.data.images}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          return(
            <TouchableNativeFeedback
              onPress={event => {
                navigate("Image", {data: item});
              }}
              background={TouchableNativeFeedback.SelectableBackground()}
              >
              <View style={styles.imageContainer}><Image source={{uri:item.uri}} style={styles.image} /></View>
            </TouchableNativeFeedback>
          ) ;
        }}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: crossResponsiveWidth(30, 30, 30 ,30),
    height: crossResponsiveHeight(20, 20, 20, 20)
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  columnWrapper: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-around",
    alignItems: "center",
  }
});
