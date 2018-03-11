import React, {Component} from "react";
import {View, Text, Modal, FlatList, TouchableNativeFeedback, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { crossResponsiveWidth, crossResponsiveHeight, crossPlatformDevice } from "react-native-cross-platform-responsive-dimensions";

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
        <FlatList
          data={this.props.buttons}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            return(
              <TouchableNativeFeedback
                onPress={event => item.onPress()}
                background={TouchableNativeFeedback.SelectableBackground()}
                >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{item.title}</Text>
                </View>
              </TouchableNativeFeedback>
            );
          }}
          ItemSeparatorComponent={() => <View style={{backgroundColor:'#fff', padding:1}}></View>}
          />
          <TouchableNativeFeedback
            onPress={event => this.setState({viewModal:false})}
            background={TouchableNativeFeedback.SelectableBackground()}
            >
            <View style={styles.dismissButton}>
              <Text  style={styles.dismissButtonText}>Dismiss</Text>
            </View>
          </TouchableNativeFeedback>
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
    padding: 5,
  },
  modalContainer: {
    height: crossResponsiveHeight(100, 100, 100, 100),
    width: crossResponsiveWidth(100, 100, 100, 100),
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    height: crossResponsiveHeight(10, 10, 10, 10),
    width: crossResponsiveWidth(90, 90, 90, 90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 100, 0, 0.7)',
    padding: 5
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  dismissButton: {
    height: crossResponsiveHeight(10, 10, 10, 10),
    width: crossResponsiveWidth(90, 90, 90, 90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.7)',
    padding: 5
  },
  dismissButtonText: {
    fontWeight: 'bold',
    fontSize: 20
  }
}
