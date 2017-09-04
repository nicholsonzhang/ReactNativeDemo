import React, { Component } from 'react';
import {Text,View,Image} from 'react-native';
export class RecentChatScreen extends Component{
    render(){
        return(
            <View>
                <Image source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                       style={{width:400,height:400}}/>
                <Image source={{uri:'favicon'}} style ={{width:40,height:40}}/>
            </View>
        );
    }
}

export class AllContactsScreen extends Component{
    render(){
        return <Text>List of all contacts</Text>
    }
}
