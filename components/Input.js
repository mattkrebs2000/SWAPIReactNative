import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";
import { AppLoading, Font } from "expo";


class Input extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            placeholder="Search Here"
            placeholderTextColor="white"
            style={styles.input}
          />
          <Button
            style={styles.button}
            onPress={() => Alert.alert("Simple Button pressed")}
            title="Filter!"
          />
        </View>
      </View>
    );
  }

 
}

export default Input;

const styles = StyleSheet.create({
  input: {
    width:290,
    marginHorizontal: 0,
    color: "white",
    fontSize: 28,
    paddingStart: 8,
    fontFamily: "myFont",
  },
  button: {
    color: "white",
    width: 10,
    marginEnd: 0,
    fontFamily: "myFont",
  },
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  },
});
