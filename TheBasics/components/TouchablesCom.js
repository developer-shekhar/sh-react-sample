import React, { Component } from 'react';
import { Platform,StyleSheet,Text,View} from 'react-native';
import {
    StackNavigator,
  } from 'react-navigation';

 export default class TouchablesCom extends Component {
    static navigationOptions = {title : 'Component : Flex'};

    render(){
        return(
             <Text> Welcome to Touchables Component</Text>   
        );

    }


 } 