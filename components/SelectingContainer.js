import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Input from "./Input";

class SelectingContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
         <Input />
        </View>
      </View>
    );
  }
}

export default SelectingContainer;

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
    alignItems:"center",
    justifyContent: "center",
  },

});
