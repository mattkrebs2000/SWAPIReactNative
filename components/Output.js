import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";


class Output extends Component {
  
  
  

    


    render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.container2}>
            <View style={styles.container4}>
              <View style={styles.container5}>
                <View style={styles.container7}></View>
                <View style={styles.container8}>
                  <View style={styles.container10}></View>
                  <View style={styles.container11}></View>
                </View>
                <View style={styles.container9}></View>
              </View>
              <View style={styles.container6}></View>
            </View>
          </View>
          <View style={styles.container3}>
            <Text style={styles.text}>Hello</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Output;

const styles = StyleSheet.create({
  container2: {
    width: 230,
    marginHorizontal: 0,

    color: "white",
    fontSize: 28,
  },
  container3: {
    alignItems: "center",
    justifyContent: "center",
    width: 63,
    backgroundColor: "black",
    color: "white",

    marginEnd: 0,
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  text: {
    color: "white",
    fontFamily: "myFont",
  },
  container4: {
    flexDirection: "column",
    flex: 1,
  },

  container5: {
    height: 65,
    borderColor: "red",
    borderWidth: 2,
    flexDirection: "row",
    flex: 1,
  },
  container6: {
    height: 29,
    backgroundColor: "black",
    borderColor: "red",
    borderWidth: 2,
  },
  container7: {
    width: 60,

    borderColor: "red",
    borderWidth: 2,
  },
  container8: {
    width: 110,

    borderColor: "red",
    borderWidth: 2,
    flexDirection: "column",
    flex: 1,
  },
  container9: {
    width: 56,

    borderColor: "red",
    borderWidth: 2,
  },

  container10: {
    height: 40,
    borderColor: "red",
    borderWidth: 2,
  },

  container11: {
    height: 29,
    borderColor: "red",
    borderWidth: 2,
  },
});
