import React, {Component} from "react";
import { FlatList, View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, ToastAndroid , Linking } from "react-native";
import { crossResponsiveFontSize } from "react-native-cross-platform-responsive-dimensions";
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

  // returns JSX to be displayed for separating 2 items in list
  _itemSeparatorComponent(){
    return(
      <View style={styles.separator}></View>
    );
  }

  // returns JSX to be displayed in case of empty list
  _listEmptyComponent(){
    return(
      <View style={styles.noFile}>
        <Text>no files to display</Text>
      </View>
    );
  }

  _updateComponentLayout(props, state){
    this._componentLayoutJSX = <FlatList
      onRefresh={() => props.startFileListUpdate(props.currentPath)}
      refreshing={props.fileList.status}
      data={props.fileList.payload}
      keyExtractor={this._keyExtractor}
      renderItem={({item}) => {
        return(
          <TouchableNativeFeedback
            onPress={(event) => {
              if(item.isFile){
                const url = `file://${item.path}`;
                // Linking.canOpenURL(url).then(supported => {
                //   if (!supported) {
                //     ToastAndroid.show("file type not supported", ToastAndroid.SHORT);
                //   } else {
                //     return Linking.openURL(url);
                //   }
                // }).catch(err => {
                //   console.error('An error occurred', err);
                //   ToastAndroid.show("unable to open file", ToastAndroid.SHORT);
                // });
                if(item.type==="image"){
                  console.log(item);
                  props.navigate("Image", {data: {uri: url, height: 100, width: 100}});
                }else{
                  const url = `file://${item.path}`;
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
              }else if(item.isDirectory){
                props.currentPath.push(item.name);
                props.startFileListUpdate(props.currentPath);
              }
            }}
            background={TouchableNativeFeedback.SelectableBackground()}
            >
            <View style={styles.listItem}>
              <Icons isFile={item.isFile} isDirectory={item.isDirectory} name={item.name} type={item.type} path={item.path} />
              <Text style={styles.listItemText}>{item.name}</Text>
            </View>
          </TouchableNativeFeedback>
        );
      }}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={this._itemSeparatorComponent}
      ListEmptyComponent={this._listEmptyComponent}
      ListHeaderComponent={() => <Legend startFileListUpdate={props.startFileListUpdate} currentPath={props.currentPath} />}
      />;
  }

  componentWillMount(){
    this._updateComponentLayout(this.props, this.state);
  }

  componentWillUpdate(nextProps, nextState){
    this._updateComponentLayout(nextProps, nextState);
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
    backgroundColor: 'rgb(255, 255 ,255)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  listItemText: {
    fontSize: crossResponsiveFontSize(2, 2, 2, 2),
    paddingLeft: 15
  },
  separator: {
    borderColor: 'rgba(100, 100, 100, 0.3)',
    borderWidth: 0.5,
  },
  noFile: {
    alignItems: "center",
    alignSelf: "center"
  }
});
