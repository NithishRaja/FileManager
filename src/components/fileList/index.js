import React, {Component} from "react";
import { FlatList, View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, Alert } from "react-native";
import Icon from "./icon";

const {width} = Dimensions.get("window");

export default class FileList extends Component{

  constructor(props){
    super(props);

  }

  // returns index of object in array to use as id
  _keyExtractor(file, index){
    return index;
  }

  // returns JSX to render for each object in array
  _renderItem(file){
    return(
      <TouchableNativeFeedback
        onPress={(event) => Alert.alert(file.item.name)}
        background={TouchableNativeFeedback.SelectableBackground()}
        >
        <View style={styles.listItem}>
          <Icon isFile={file.item.isFile} isDirectory={file.item.isDirectory} name={file.item.name} />
          <Text style={styles.listItemText}>{file.item.name}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  // returns JSX to be displayed for separating 2 items in list
  _itemSeparatorComponent(){
    return(
      <View style={styles.separator}></View>
    );
  }

  // returns JSX to be displayed in case of empty list
  _listEmptyComponent(){
    return(
      <Text>no files to display</Text>
    );
  }

  componentWillMount(){
    this._componentLayoutJSX = <FlatList
      data={this.props.fileList}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      ItemSeparatorComponent={this._itemSeparatorComponent}
      ListEmptyComponent={this._listEmptyComponent}
      />;
  }

  componentWillUpdate(nextProps){
    this._componentLayoutJSX = <FlatList
      data={nextProps.fileList}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      ItemSeparatorComponent={this._itemSeparatorComponent}
      ListEmptyComponent={this._listEmptyComponent}
      />;
  }

  render(){
    return(
      this._componentLayoutJSX
    );
  }

}

const styles = StyleSheet.create({
  listItem: {
    width: width,
    backgroundColor: 'rgb(245, 245, 255)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  listItemText: {
    fontSize: 14,
    paddingLeft: 15
  },
  separator: {
    borderColor: 'rgba(100, 100, 100, 0.3)',
    borderWidth: 0.5,
  }
});
