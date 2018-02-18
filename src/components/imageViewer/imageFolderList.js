import React, {Component} from "react";
import { View, Text, ImageBackground, FlatList, Dimensions, TouchableNativeFeedback, Alert, StyleSheet } from "react-native";
import { crossResponsiveWidth, crossResponsiveHeight } from "react-native-cross-platform-responsive-dimensions";

export default class ImageFolderList extends Component{
  constructor(props){
    super(props);

  }

  _updateComponentLayout(props, state){
    console.log(props.navigation);
    const {navigate} = this.props.navigation;
    this._componentLayoutJSX = (
      <View>

      <FlatList
        data={props.imageList.payload}
        onRefresh={() => props.startImageListUpdate()}
        refreshing={props.imageList.status}
        keyExtractor={(file, index) => index}
        renderItem={({item}) => {
          return(
            <TouchableNativeFeedback
            onPress={event => {
              navigate("Files", {data: item});
            }}
            background={TouchableNativeFeedback.SelectableBackground()}
              >
              <View style={styles.folder}>
                <ImageBackground
                  source={{uri:item.images[0].uri}}
                  style={styles.imageContainer}
                  >
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.group_name}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableNativeFeedback>
          );
        }}
        ListEmptyComponent={() => <View style={styles.listEmptyContainer}><Text>No photos found</Text></View>}
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
  imageContainer: {
    width: crossResponsiveWidth(45, 45, 45 ,45),
    height: crossResponsiveHeight(20, 20, 20, 20),
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  textContainer: {
    backgroundColor: "rgba(100, 100, 100 ,0.4)",
    paddingLeft: crossResponsiveWidth(2, 2, 2 ,2)
  },
  text: {
    textDecorationColor: '#000'
  },
  folder: {
    elevation: 4,
    width: crossResponsiveWidth(45, 45, 45 ,45),
  },
  column: {
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  listEmptyContainer: {
    alignItems :'center',
    alignSelf: 'center'
  }
});
