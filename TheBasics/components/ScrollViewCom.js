import React, { Component } from 'react';
import { Platform,StyleSheet,Text,View} from 'react-native';
import {
    StackNavigator,
  } from 'react-navigation';

 export default class ScrollViewCom extends Component {
    static navigationOptions = {title : 'Component : Flex'};

    render(){
        return(
             <Text> Welcome to ScrollView Component</Text>   
        );

    }


 } 