import React, { Component } from "react"
import { Platform, StyleSheet, Text, Button, View, Alert } from "react-native"

let styles
const add = (a: number, b: number): number => a + b
const result = add(55, 66)

const rs2 = add("55", "55")

console.log(`rs2 = ${rs2}result = ${result}`)
export default class ButtonCom extends Component {
  static navigationOptions = { title: "Component : Button" }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.greetings}>Simple Button</Text>
          <Text>
            The title and onPress handler are required. It is recommended to set accessibility lable
            to help make your app usable by everyone.
          </Text>
          <Button
            title="Press Me"
            onPress={() => {
              Alert.alert("You pressed me!")
            }}
          />
        </View>
        <View style={StyleSheet.flatten([styles.topMargin20, styles.box])}>
          <Text style={styles.greetings}>Simple Button</Text>
          <Text>
            The title and onPress handler are required. It is recommended to set accessibility lable
            to help make your app usable by everyone.
          </Text>
        </View>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#fff",
  },
  box: {
    padding: 8,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#eee",
    backgroundColor: "#d6d7da",
  },
  greetings: {
    fontSize: 18,
    fontWeight: "700",
  },
  topMargin20: {
    marginTop: 20,
  },
  buttonStyle: {
    padding: 10,
  },
})
