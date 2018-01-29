import React, {Component} from "react";
import { Text, View, FlatList, Alert, StyleSheet, TouchableNativeFeedback, Image } from "react-native";
import { crossResponsiveWidth, crossResponsiveHeight, crossResponsiveFontSize } from "react-native-cross-platform-responsive-dimensions";

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
  },
  listItem: {
    // elevation: 3,
    // borderBottomColor: "rgba(255, 100, 0, 0.6)",
    // borderBottomWidth: 2,
    borderLeftColor: "rgba(255, 100, 0, 0.6)",
    borderLeftWidth: 2,
    backgroundColor: "rgba(255, 100, 0, 0.4)",
    borderRadius: 10,
    padding: 5,
    marginTop: 4,
    marginLeft: 2
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
