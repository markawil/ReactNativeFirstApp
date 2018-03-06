import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, FlatList, TouchableOpacity } from "react-native";
import { StackNavigator } from 'react-navigation';

export default class ItemsListView extends Component {

    constructor() {
        super();
        this.state = {
            items: [
             {key:'1', title:'Stalingrad', year:'1999'},
             {key:'2', title:'Fall of Berlin', year:'2003'},
             {key:'3', title:'The Battle for Spain', year:'2006'},
             {key:'4', title:'Crete 1941', year:'2002'},
             {key:'5', title:'Ardennes 1944', year:'2014'},
             {key:'6', title:'The Second World War', year:'2012'},
            ]
        };
    }

    _keyExtractor = (item, index) => item.key;

    _renderItem = ({item}) => (
        <ItemView
            id = {item.key}
            title = {item.title}
            year = {item.year}
            // set onPressItemHere
        />
    );

    render() {
        return(
            <FlatList
                data = { this.state.items }
                renderItem = { this._renderItem }
                keyExtractor = { this._keyExtractor }
            />
        );
    }
}

export class ItemView extends Component {

    // _onPress = () => {
    //     this.props.onPressItem(this.props.id);
    // };

    render() {
        return (
            <TouchableOpacity> 
                <View>
                    <Text style={{margin: 5}}>{this.props.title}</Text>
                    <Text style={{margin: 10}}>{this.props.year}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
