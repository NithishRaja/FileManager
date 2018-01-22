import React, {Component} from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from "react-native";

const {width, height} = Dimensions.get("window");

export default class Nav extends Component{

  constructor(props){
    super(props);

    this.state = {
      data: ["audio", "video", "images"]
    }

  }

  render(){
    return(
      <FlatList
        data={this.state.data}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <View style={styles.listItem}><Image source={require("./../../static/images/video.png")} style={{height:30, width:30}} /><Text>{item}</Text></View>}
        ItemSeparatorComponent={() => <View style={styles.listItemSeparator}></View>}
        ListHeaderComponent={() => <View style={styles.listHeader}><Text>quick access</Text></View>}
        />
    );
  }

}

const styles = StyleSheet.create({
  listItem: {
    width: width-50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  listItemSeparator: {
    borderWidth: 0.5,
    borderColor: 'rgba(100, 100, 100, 0.3)'
  },
  listHeader: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
});
