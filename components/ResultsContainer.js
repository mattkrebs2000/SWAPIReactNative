import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Output from "./Output";

class ResultsContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Output />
        </View>
      </View>
    );
  }
}

export default ResultsContainer;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
