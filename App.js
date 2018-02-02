/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  AppRegistry
} from 'react-native';
import RootAppNavigator from './src/config/AppRouting.js';


export default class App extends Component{
  render() {
    return (
      <RootAppNavigator />
    );
  }
}
AppRegistry.registerComponent('App', () => App);

