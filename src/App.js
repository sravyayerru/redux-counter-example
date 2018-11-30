import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ConfigureStore from './ConfigureStore'
import CounterActions from './Actions/CounterActions'

import {Provider} from 'react-redux';

const store= ConfigureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <CounterActions />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
