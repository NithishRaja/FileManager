import React, {Component} from "react";
import { FlatList, View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, ToastAndroid , Linking } from "react-native";
import Icons from "./icons";
import Legend from "./legend";

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
  // _renderItem(file){
  //   return(
  //     <TouchableNativeFeedback
  //       onPress={(event) => {
  //         if(file.item.isFile){
  //           Alert.alert(file.item.name);
  //         }else if(file.item.isDirectory){
  //           console.log(file.item.name);
  //           // this.props.updateCurrentPath(file.item.name);
  //         }
  //       }}
  //       background={TouchableNativeFeedback.SelectableBackground()}
  //       >
  //       <View style={styles.listItem}>
  //         <Icon isFile={file.item.isFile} isDirectory={file.item.isDirectory} name={file.item.name} />
  //         <Text style={styles.listItemText}>{file.item.name}</Text>
  //       </View>
  //     </TouchableNativeFeedback>
  //   );
  // }

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

  _updateComponentLayout(props){
    this._componentLayoutJSX = <FlatList
      data={props.fileList}
      keyExtractor={this._keyExtractor}
      renderItem={(file) => {
        return(
          <TouchableNativeFeedback
            onPress={(event) => {
              if(file.item.isFile){
                if(file.item.type==="image"){
                  props.updateSelectedImage(file.item);
                  props.navigate("Image");
                }else{
                  const url = `file://${file.item.path}`;
                  Linking.canOpenURL(url).then(supported => {
                    if (!supported) {
                      ToastAndroid.show("file type not supported", ToastAndroid.SHORT);
                    } else {
                      return Linking.openURL(url);
                    }
                  }).catch(err => {
                    console.error('An error occurred', err);
                    ToastAndroid.show("unable to open file", ToastAndroid.SHORT);
                  });
                }
              }else if(file.item.isDirectory){
                props.currentPath.push(file.item.name);
                props.startFileListUpdate(props.currentPath);
              }
            }}
            background={TouchableNativeFeedback.SelectableBackground()}
            >
            <View style={styles.listItem}>
              <Icons isFile={file.item.isFile} isDirectory={file.item.isDirectory} name={file.item.name} type={file.item.type} />
              <Text style={styles.listItemText}>{file.item.name}</Text>
            </View>
          </TouchableNativeFeedback>
        );
      }}
      ItemSeparatorComponent={this._itemSeparatorComponent}
      ListEmptyComponent={this._listEmptyComponent}
      ListHeaderComponent={() => <Legend startFileListUpdate={props.startFileListUpdate} currentPath={props.currentPath} />}
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
