import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

export default class MainView extends Component {
    
    render() {
        return (
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{flex: 0.5}} />
                    <Text>Hello World!</Text>
                    <View style={{flex: 0.5}} />
                </View>
        );
    }
}
