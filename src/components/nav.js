import React, {Component} from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window");

export default class Nav extends Component{

  constructor(props){
    super(props);

  }

  render(){
    return(
      <View style={styles.container}>
        <Text>quick access</Text>
        <View>
          <Text>audio</Text>
        </View>
        <View>
          <Text>video</Text>
        </View>
        <View>
          <Text>images</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 0, 0)',
    height: height
  }
});
