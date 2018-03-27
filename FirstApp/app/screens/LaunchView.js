import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, FlatList, TouchableOpacity } from "react-native";
import { StackNavigator } from 'react-navigation';
import LaunchService from "../services/LaunchService";

export default class LaunchView extends Component {

    constructor() {
        super();
        this.state = {
            nasaUrls: [],
            error: null,
            refreshing: false,
        };
    }

    loadNasaUrlsFromApi() {
        this.setState({
            nasaUrls: []
        })

        LaunchService.getNasaUrlsAsync().then((urls) => {
            this.setState({
                nasaUrls: urls
            });
        });
    }

    loadNasaUrlsFromCache() {
        this.setState({
            nasaUrls: []
        })
        var that = this; // scope capture for the promise callback
        // I set a timeout just to prove it was clearing the list then refreshing from the cache
        setTimeout(function() {
            LaunchService.getCachedNasaUrls().then((urls) => {
                that.setState({
                    nasaUrls: urls
                });
            });
        }, 2000)
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
                <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: "row", backgroundColor: "#B8EDB1"}}>
                    <Button style={{margin: 10}} title="Refresh from API" onPress={() =>  this.loadNasaUrlsFromApi() }/>
                    <Button style={{margin: 10}} title="Load from Cache" onPress={() => this.loadNasaUrlsFromCache() }/>
                </View>
                <FlatList
                    data = { this.state.nasaUrls }
                    renderItem = { this._renderItem }
                    ItemSeparatorComponent={this.renderSeparator}
                    onPressItem={this._onPressItem}
                    keyExtractor = { this._keyExtractor }
                    style={{backgroundColor: '#d7ddd4' }}
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
