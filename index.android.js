/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component}from 'react';
import {AppRegistry,Image,View,Text} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';
import HomeScreen from './js/HomeScreen';
import ChatScreen from './js/ChatScreen';

import {RecentChatScreen,AllContactsScreen} from './js/App';
import FadeInView from "./js/FadeInView";

const MainScreenNavigator = TabNavigator({
    Recent:{screen:RecentChatScreen},
    All:{screen:AllContactsScreen},
});


const stackNavigator = StackNavigator({
    Home:{screen:HomeScreen},
    Chat:{screen:ChatScreen},
    }
);

export default class Test extends Component{
    render(){
        return(
           <FadeInView style ={{width:260,height:50,backgroundColor:'powderblue'}}>

               <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}> Fading in</Text>
           </FadeInView>
        );
    }
}


AppRegistry.registerComponent('reactnative', () => Test);
