import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppLoading, Font } from "expo";



const Output = (props) =>(

  
      <View>
      
          <View style={styles.container} width={props.width-35} maxWidth={650}>
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
                  <Text style={styles.text3}>{props.width}</Text>
                </View>
              </View>
              <View style={styles.container9}>
                <Text style={styles.text4}>{props.height}</Text>
              </View>
            </View>
            <View style={styles.container6}>
              <Text style={styles.text3}>AAAAAA</Text>
            </View>
          </View>
   
      </View>
    );

export default Output;

const styles = StyleSheet.create({
  container: {
    width: 340,
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
    alignItems: "center",
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
    backgroundColor: "black"
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
    fontSize: 23,
   
  },

  text3: {
    color: "white",
    fontSize: 15,
   
    
  },

  text4: {
    fontSize: 18,
   
    color: "white",
  },
});
