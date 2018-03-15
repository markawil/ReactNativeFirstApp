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
        };
    }

    urlPath = 'https://launchlibrary.net/1.3/agency/NASA';

    componentDidMount() {
        return fetch(this.urlPath)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    nasaUrls: responseJson.agencies[0].infoURLs
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static navigationOptions = {
      title:"Launch NASA Data",
    };

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({item, index}) => (
        <LaunchItemView
            id = {index}
            urlPath = {item}
            onPressItem = {this._onPressItem}
        />
    );

    _onPressItem = (id: string) => {
        const { navigate } = this.props.navigation;
        idAsNum = parseInt(id);
        navigate('NasaWebView', { urlPath: this.state.nasaUrls[idAsNum] })
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
                <FlatList
                    data = { this.state.nasaUrls }
                    renderItem = { this._renderItem }
                    ItemSeparatorComponent={this.renderSeparator}
                    onPressItem={this._onPressItem}
                    keyExtractor = { this._keyExtractor }
                    style={{backgroundColor: '#d7ddd4'}}
                />
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
                    <Text style={{margin: 10, fontSize:20}}>{this.props.urlPath}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
