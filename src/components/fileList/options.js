import React, {Component} from "react";
import {View, Text, Modal, TouchableNativeFeedback, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { crossPlatformDevice } from "react-native-cross-platform-responsive-dimensions";

export default class Options extends Component{
  constructor(props){
    super(props);

    this.state = {
      viewModal: false
    };
  }

  render(){
    return(
      <View>
      <Modal
        visible={this.state.viewModal}
        animationType={'slide'}
        onRequestClose={() => this.setState({viewModal: false})}
        >
        <View style={styles.modalContainer}>
        <Text style={{backgroundColor:'#aaa'}}>Hello</Text>
        </View>
      </Modal>
      <TouchableNativeFeedback
        onPress={event => this.setState({viewModal: true})}
        background={TouchableNativeFeedback.SelectableBackground()}
        >
        <View style={styles.options}>
          <Icon name="options-vertical" size={crossPlatformDevice(20, 20, 20, 20)} />
        </View>
      </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = {
  options: {
    padding: 5
  },
  modalContainer: {
    height: 400,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center'
  },
}
