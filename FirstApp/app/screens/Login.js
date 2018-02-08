import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native"

export default class Login extends Component {
    render() {
        return {
            <View style={flex 1, flexDirection: "column"}}>
                <Text>Username:</Text>
                <TextInput/>
                <Text>Password:</Text>
                <TextInput/>
                <Button title="Login"/>
            </View>
        }
    }
}
