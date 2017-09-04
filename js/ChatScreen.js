import React, { Component } from 'react';
import {Text,Button} from 'react-native';
export default class ChatScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title: `Chat with ${navigation.state.params.user}`,
        headerRight:<Button title = "info" />
    });



    render(){
        const {params} =this.props.navigation.state;
        return <Text>Chat with {params.user}</Text>;
    }
}