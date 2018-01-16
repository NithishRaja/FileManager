import React, {Component} from "react";
import { Text, View, FlatList, Alert, StyleSheet, TouchableNativeFeedback } from "react-native";

export default class Legend extends Component{

  constructor(props){
    super(props);

  }

  _updateComponentLayout(props, state){
    this._componentLayoutJSX = <FlatList
      style={styles.container}
      data={props.currentPath}
      keyExtractor={(dir, index) => index}
      renderItem={(dir) => {
        return(<View style={styles.listItem}><Text>{dir.index===0?"root":dir.item}</Text></View>);
      }}
      ItemSeparatorComponent={() => <View style={styles.listItemSeparator}></View>}
      horizontal={true}
      />;
  }

  componentWillMount(){
    this._updateComponentLayout(this.props);
  }

  componentWillUpdate(nextProps){
    this._updateComponentLayout(nextProps);
  }

  render(){
    return(
      this._componentLayoutJSX
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(245, 245, 255)'
  },
  listItem: {
    padding: 5
  },
  listItemSeparator: {
    borderRightWidth:0.5,
    borderRightColor:'#000',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  }
});
