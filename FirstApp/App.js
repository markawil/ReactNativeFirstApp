/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from "./app/screens/Login";
import MainView from "./app/screens/MainView";
import { StackNavigator } from 'react-navigation';

export default class App extends Component {
    render() {
        return <RootStack />;
    }
}

const RootStack = StackNavigator({
    // routes
    Login: {
        screen: Login,
    },
    MainView: {
        screen: MainView,
    },
});
