import React, {Component} from "react";
import { Text, View, FlatList, Alert, StyleSheet, TouchableNativeFeedback, Image } from "react-native";

export default class Legend extends Component{

  constructor(props){
    super(props);

  }

  _itemSeparatorComponent(){
    return(
      <View style={styles.listItemSeparator}>
        <Image source={require("./../../../static/images/next.png")} style={styles.listItemSeparatorImage} />
      </View>
    );
  }

  _updateComponentLayout(props, state){
    this._componentLayoutJSX = <FlatList
      style={styles.container}
      data={props.currentPath}
      keyExtractor={(dir, index) => index}
      renderItem={(dir) => {
        return(
          <TouchableNativeFeedback
            onPress={(event) => {
              props.startFileListUpdate(props.currentPath.slice(0, dir.index+1));
            }}
            background={TouchableNativeFeedback.SelectableBackground()}
            >
            <View style={styles.listItem}>
              <Text>{dir.index===0?"root":dir.item}</Text>
            </View>
          </TouchableNativeFeedback>
        );
      }}
      ItemSeparatorComponent={this._itemSeparatorComponent}
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
    backgroundColor: 'rgb(245, 245, 255)',
  },
  listItem: {
    padding: 5
  },
  listItemSeparator: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemSeparatorImage: {
    height:20,
    width:20
  }
});
