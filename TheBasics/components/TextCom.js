import React, { Component } from "react"
import { Platform, StyleSheet, Text, View, Button, Alert } from "react-native"
import { StackNavigator } from "react-navigation"

class NextedText extends Component {
  render() {
    return (
      // text component can be nested. Child component inherit its parent style
      <Text>
        <AppHeaderText>
          <Text> Text </Text>
        </AppHeaderText>
        <Text style={styles.bodyText}>supports nesting, styling, and touch handling</Text>
      </Text>
    )
  }
}
class AppHeaderText extends Component {
  render() {
    return <Text style={{ fontSize: 20, fontWeight: "700" }}>{this.props.children}</Text>
  }
}

export default class TextCom extends Component {
  static navigationOptions = { title: "Component : Text" }
  render() {
    return (
      <View style={styles.container}>
        <Text>A React component for displaying text.</Text>
        <NextedText />
        <Text style={{ marginTop: 40 }}>
          <AppHeaderText>
            <Text> Text </Text>
          </AppHeaderText>
          component is special relative to its layout : everything inside it uses Text Layout not
          flexbox layout.
        </Text>
        <Text style={styles.examples}>
          <Text> This is the first line </Text>
          <Text>
            This is second line. but its flow with first line just like it is part of first line.
          </Text>
        </Text>
        <View sytle={{ marginTop: 20 }}>
          <Text>Text can be configured to handle press or long press as well </Text>
          <Text style={styles.examples}>
            <Text
              onPress={() => {
                Alert.alert("You just press the text")
              }}
            >
              Press here!
            </Text>
            {"\n"}
            <Text
              onLongPress={() => {
                Alert.alert("You just long pressed on the text")
              }}
            >
              Long Press here!!
            </Text>
          </Text>
        </View>
        <View sytle={{ marginTop: 20 }}>
          <AppHeaderText>
            <Text> Text Style Properties : </Text>
          </AppHeaderText>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 14,
    fontWeight: "normal",
  },
  examples: {
    color: "gray",
    fontWeight: "700",
    fontStyle: "italic",
    marginTop: 10,
    marginBottom: 10,
  },
})
