import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
//import MainView from "./app/screens/MainView";
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {    
    
    constructor(props) {
        super(props);
        this.state = { username: '', password: ''};
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: "column", backgroundColor: "#B8EDB1"}}>
                <View style={{flex: 0.3}} />
                <Text>Username:</Text>
                <TextInput style={{width: 200, height: 30, backgroundColor: 'white'}}
                    onChangeText={(username) => this.setState({username})}/>
                <Text>Password:</Text>
                <TextInput style={{width: 200, height: 30, backgroundColor: 'white'}}
                    onChangeText={(password) => this.setState({password})}/>
                <View style={{flex: 0.2}} />
                <Button title="Login" onPress={() => navigate('MainView', { loginName: this.state.username}) }/>
            </View>
        );
    }
}
