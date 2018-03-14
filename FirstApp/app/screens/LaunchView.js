import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { StackNavigator } from 'react-navigation';

export default class LaunchView extends Component {

    constructor() {
        super();
        this.state = {
            nasaUrls: [],
            error: null,
            refreshing: false,
            responseJson: 'nothing returned yet.'
        };
    }

    urlPath = 'https://launchlibrary.net/1.3/agency/NASA';

    componentDidMount() {
        return fetch(this.urlPath)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    responseJson: JSON.stringify(responseJson.agencies)
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static navigationOptions = {
      title:"Launch NASA Data",
    };

    // async function nasaData() {
    //     try {
    //         let response = await fetch(nasaUrlPath);
    //         let responseJson = await response.json();
    //         return responseJson.agencies;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    _keyExtractor = (item, index) => item.key;

    _renderItem = ({url}) => (
        <LaunchItemView
            urlPath = {url.path}
            onPressItem = {this._onPressItem}
        />
    );

    _onPressItem = (id: string) => {
        // navigate to new view showing URL in a web view
    };

    _renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE",
            }}
          />
        );
    };

    render() {
        return (
            <View>
                <Text style={{margin: 10}}>{this.state.responseJson}</Text>
            </View>
        );
    }
}

export class LaunchItemView extends Component {

    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        return(
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{margin: 5}}>{this.props.urlPath}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
