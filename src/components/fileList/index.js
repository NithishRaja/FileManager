import React, {Component} from "react";
import { FlatList, View, Text, StyleSheet, Dimensions } from "react-native";
import Icon from "./icon";

const {width} = Dimensions.get("window");

export default class FileList extends Component{

  constructor(props){
    super(props);

  }

  componentWillMount(){
    this._componentLayoutJSX = <FlatList
      data={this.props.fileList}
      keyExtractor={(file, index) => index}
      renderItem={(file) => <View style={styles.listItem}><Icon /><Text>{file.item}</Text></View>}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      ListEmptyComponent={() => <Text>no files to display</Text>}
      />;
  }

  componentWillUpdate(nextProps){
    this._componentLayoutJSX = <FlatList
      data={nextProps.fileList}
      keyExtractor={(file, index) => index}
      renderItem={(file) => <View style={styles.listItem}><Icon isFile={file.item.isFile} isDirectory={file.item.isDirectory} name={file.item.name} /><Text>{file.item.name}</Text></View>}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      ListEmptyComponent={() => <Text>no files to display</Text>}
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
