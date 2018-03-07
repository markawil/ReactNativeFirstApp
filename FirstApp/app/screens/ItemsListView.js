import React, { Component } from 'react';
import { Modal, TouchableWithoutFeedback, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
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
            ],
            modalVisible: false,
            gestureName: 'none',
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    static navigationOptions = {
      title:"Books by Antony Beevor",
    };

    _keyExtractor = (item, index) => item.key;

    _renderItem = ({item}) => (
        <ItemView
            id = {item.key}
            title = {item.title}
            year = {item.year}
            onPressItem = {this._onPressItem}
        />
    );

    _onPressItem = (id: string) => {
        this.setModalVisible(true);
    };

    renderSeparator = () => {
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

    _scrollViewPressed = () => {
        this.setModalVisible(false);
    };

    _renderModalContent = () => (
        <ScrollView>
            <TouchableOpacity onPress={this._scrollViewPressed}>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
            </TouchableOpacity>
        </ScrollView>
    );

    render() {

        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed');
                    }}>
                    {this._renderModalContent()}
                </Modal>
                <FlatList
                    data = { this.state.items }
                    renderItem = { this._renderItem }
                    keyExtractor = { this._keyExtractor }
                    ItemSeparatorComponent={this.renderSeparator}
                    onPressItem={this._onPressItem}
                    style={{backgroundColor: '#d7ddd4'}}
                />
            </View>
        );
    }
}

export class ItemView extends Component {

    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={{backgroundColor: '#c5ffaa'}}>
                    <Text style={{margin: 5}}>{this.props.title}</Text>
                    <Text style={{margin: 10}}>{this.props.year}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
