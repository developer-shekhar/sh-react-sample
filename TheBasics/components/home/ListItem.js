import React, { Component } from "react"
import { Button } from "react-native"

class ListItem extends Component {
  onOptionButtonPressed = (item) => {
    // load selected component page
    let targetScreen = "ButtonCom"
    if (item.key === "text") {
      targetScreen = "TextCom"
    } else if (item.key === "flex") {
      targetScreen = "FlexboxCom"
    } else if (item.key === "touchables") {
      targetScreen = "TouchablesCom"
    } else if (item.key === "scroll-view") {
      targetScreen = "ScrollViewCom"
    }
    this.props.navigate(targetScreen)
  }

  render() {
    return (
      <Button
        title={this.props.item.text}
        onPress={() => this.onOptionButtonPressed(this.props.item)}
      />
    )
  }
}

export default ListItem
