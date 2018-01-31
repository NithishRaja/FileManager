import React, {Component} from "react";
import { Text, View, FlatList, Alert, StyleSheet, TouchableNativeFeedback, Image, ToastAndroid } from "react-native";
import { crossResponsiveWidth, crossResponsiveHeight, crossResponsiveFontSize } from "react-native-cross-platform-responsive-dimensions";
import Icon from "react-native-vector-icons/Entypo";

export default class Legend extends Component{

  constructor(props){
    super(props);

  }

  _itemSeparatorComponent(){
    return(
      <View style={styles.listItemSeparator}>
        <Icon name="chevron-right" size={20} />
      </View>
    );
  }

  _updateComponentLayout(props, state){
    this._componentLayoutJSX = <FlatList
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      data={props.currentPath}
      keyExtractor={(dir, index) => index}
      renderItem={(dir) => {
        return(
          <TouchableNativeFeedback
            onPress={(event) => {
              if(props.currentPath.length===1){
                ToastAndroid.show("inside root directory. cannot go back", ToastAndroid.SHORT);
              }
              props.startFileListUpdate(props.currentPath.slice(0, dir.index+1));
            }}
            background={TouchableNativeFeedback.SelectableBackground()}
            >
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{dir.index===0?"root":dir.item}</Text>
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
    width: crossResponsiveWidth(100, 100, 100, 100),
    backgroundColor: 'rgb(255, 255, 255)',
    paddingLeft: 4,
    paddingBottom: 4
  },
  listItem: {
    borderLeftColor: "rgba(255, 100, 0, 0.6)",
    borderLeftWidth: 2,
    backgroundColor: "rgba(255, 100, 0, 0.4)",
    borderRadius: 10,
    padding: 5,
    marginTop: 4
  },
  listItemText: {
    fontSize: crossResponsiveFontSize(2, 2, 2, 2)
  },
  listItemSeparator: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemSeparatorImage: {
    height: crossResponsiveWidth(4, 4, 4, 4),
    width: crossResponsiveHeight(4, 4, 4, 4)
  }
});
