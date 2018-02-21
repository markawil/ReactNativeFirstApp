import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
//import MainView from "./app/screens/MainView";
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {    

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1, flexDirection: "column", backgroundColor: "#B8EDB1"}}>
                <View style={{flex: 0.3}} />
                <Text>Username:</Text>
                <TextInput/>
                <Text>Password:</Text>
                <TextInput/>
                <View style={{flex: 0.2}} />
                <Button title="Login" onPress={() => navigate('MainView', { loginName: "Mark"}) }/>
            </View>
        );
    }
}
