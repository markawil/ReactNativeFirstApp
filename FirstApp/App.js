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
import ItemsListView from "./app/screens/ItemsListView";
import LaunchView from "./app/screens/LaunchView";
import NasaWebView from "./app/screens/NasaWebView";
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
    ItemsListView: {
        screen: ItemsListView,
    },
    initialRouteName: {
        screen: Login,
    },
    LaunchView: {
        screen: LaunchView,
    },
    NasaWebView: {
        screen: NasaWebView,
    }
});
