import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

export default class MainView extends Component {

    constructor(props) {
        super(props);
        this.state = { showSuccessMessage: false };
    }

    render() {
        var name = this.props.navigation.state.params.loginName ;
        var successMessage = this.state.showSuccessMessage ? 'Thank you, your answer has been submitted!' : '';
        const { navigate } = this.props.navigation;

        return (
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex: 0.2}} />
                    <Text style={{margin: 10}}>Hello {name}, please enter your last name</Text>
                    <TextInput style={{width: 200, height: 30, backgroundColor: 'powderblue'}} />
                    <Button style={{margin: 10}} title="Submit" onPress={() => {
                            this.setState(previousState => {
                                return { showSuccessMessage: !previousState.showSuccessMessage };
                        }); }
                    }/>
                    <Text style={{margin: 10}}>{successMessage}</Text>
                    <Button style={{margin: 10}} title="Show Videos (Week 4)" onPress={() => navigate('VideosView', {}) }/>
                    <View style={{flex: 0.2}} />
                </View>
        );
    }
}
