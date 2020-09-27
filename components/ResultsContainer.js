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
    width: "100%",
    height: 80,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "flex-start",
    justifyContent: "center",
   
  },
});
