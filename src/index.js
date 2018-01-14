import React, { Component } from "react";
import { Provider } from "react-redux";
import Main from "./containers/mainContainer";
import store from "./store";

export default class App extends Component{
  render(){
    return <Provider store={store}><Main /></Provider>;
  }
}
