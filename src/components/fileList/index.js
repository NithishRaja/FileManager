import React, {Component} from "react";
import { FlatList, View, Text, StyleSheet, Dimensions } from "react-native";
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
      <View style={styles.listItem}>
        <Icon isFile={file.item.isFile} isDirectory={file.item.isDirectory} name={file.item.name} />
        <Text>{file.item.name}</Text>
      </View>
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
    padding: 5
  },
  separator: {
    borderColor: 'rgba(100, 100, 100, 0.3)',
    borderWidth: 0.5,
  }
});
