import React,{Component} from 'react';
import {View} from 'react-native';
export  default class FixedDimensionsBasics extends Component{

    render(){
        return(
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'stretch'}}>
                <View style = {{height:50,backgroundColor:'powderblue'}}></View>
                <View style = {{width:50,height:50,backgroundColor:'skyblue'}}></View>
                <View style = {{height:50,backgroundColor:'steelblue'}}></View>

            </View>


        );
    }
}