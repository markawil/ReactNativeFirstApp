import React, { Component } from 'react';
import { WebView } from "react-native";
import { StackNavigator } from 'react-navigation';

export default class NasaWebView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var urlPath = this.props.navigation.state.params.urlPath;
        return (
            <WebView
                source={{uri: urlPath}}
            />
        );
    }
}
