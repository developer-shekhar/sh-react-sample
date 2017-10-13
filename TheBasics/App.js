/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react"
// import { StyleSheet } from "react-native"
import { StackNavigator } from "react-navigation"

import HomeScreen from "./components/home/HomeScreen"
import ButtonCom from "./components/ButtonCom"
import TextCom from "./components/TextCom"
import FlexboxCom from "./components/FlexboxCom"
import TouchablesCom from "./components/TouchablesCom"
import ScrollViewCom from "./components/ScrollViewCom"

const AppNav = StackNavigator({
  Home: { screen: HomeScreen },
  ButtonCom: { screen: ButtonCom },
  TextCom: { screen: TextCom },
  FlexboxCom: { screen: FlexboxCom },
  TouchablesCom: { screen: TouchablesCom },
  ScrollViewCom: { screen: ScrollViewCom },
})
const App = () => <AppNav />

export default App
