import React,{Component} from 'react';
import   {TouchableHighlight,Text,TouchableNativeFeedback} from 'react-native';

export default class MyButton extends Component{
    _onPressButton(){
        console.log("you tapped th button")
    }

    render(){
        return(
            <TouchableHighlight onPress={this._onPressButton()}>

                <Text style ={{width:400,height:200}}>Button</Text>
            </TouchableHighlight>
        );
    }
}