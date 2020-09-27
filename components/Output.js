import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppLoading, Font } from "expo";



class Output extends Component {

  render() {

    return (
      <View>
      
          <View style={styles.container}>
            <View style={styles.container5}>
              <View style={styles.container7}>
                <View style={styles.face}>
                  <Text style={styles.text}>Hello</Text>
                </View>
              </View>
              <View style={styles.container8}>
                <View style={styles.container10}>
                  <Text style={styles.text2}>Search Here</Text>
                </View>
                <View style={styles.container11}>
                  <Text style={styles.text3}>YYYYYY</Text>
                </View>
              </View>
              <View style={styles.container9}>
                <Text style={styles.text4}>Female</Text>
              </View>
            </View>
            <View style={styles.container6}>
              <Text style={styles.text3}>AAAAAA</Text>
            </View>
          </View>
   
      </View>
    );
  }
}

export default Output;

const styles = StyleSheet.create({
  container: {
    width: 360,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderColor: "red",
    borderWidth: 2,
  },

  container5: {
    flex: 20,
    flexDirection: "row",
  },
  container6: {
    flex: 5,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "black",
  },
  container7: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  container8: {
    flex: 20,
    flexDirection: "column",
  },
  container9: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  container10: {
    flex: 20,
    justifyContent: "center",
  },

  container11: {
    flex: 10,
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  face: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 50,

    overflow: "hidden",
  },
  text2: {
    color: "white",
    fontSize: 20,
    fontFamily: "myFont",
  },

  text3: {
    color: "white",
    fontSize: 12,
    fontFamily: "myFont",
    
  },

  text4: {
    fontSize: 12,
    fontFamily: "myFont",
    color: "white",
  },
});
