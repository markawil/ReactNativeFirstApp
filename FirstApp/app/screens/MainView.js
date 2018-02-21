import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

export default class MainView extends Component {

    render() {
        var name = this.props.navigation.state.params.loginName ;
        return (
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex: 0.3}} />
                    <Text style={{margin: 10}}>Hello {name}, please enter your last name</Text>
                    <TextInput style={{width: 200, height: 30, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 0.5}} />
                </View>
        );
    }
}
