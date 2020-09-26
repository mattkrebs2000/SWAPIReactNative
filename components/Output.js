import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";


class Output extends Component {
  
  
  

    


    render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.container2}>
            
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
    marginHorizontal: 0,
    color: "white",
    fontSize: 28,
    flex: 80,
    height: 100,
    flexDirection:"column",
  
  },
  container3: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    color: "white",
   borderLeftWidth:3,
   borderLeftColor:"red",
    
    marginEnd: 0,
  flex: 20,
  height: 94
  },
  container: {
    width:296,
    flexDirection: "row",
    backgroundColor: "blue",
    alignItems:"center",
    justifyContent: "center",
   flex: 1,
   borderColor: "red",
   borderWidth: 2,

    
  },
  text: {
    color: "white",
    fontFamily: "myFont",
  },


  container5: {

    borderColor: "white",
    borderWidth: 2,
    flex: 20,
    flexDirection: "row",   
  },
  container6: {
 
  
    borderColor: "white",
    borderWidth: 2,
    flex: 10
  },
  container7: {
   

    borderColor: "white",
    borderWidth: 2,
    flex: 10
  },
  container8: {
  

    borderColor: "white",
    borderWidth: 2,
    flex: 10,
    flexDirection: "column",
   
  },
  container9: {
 

    borderColor: "white",
    borderWidth: 2,
    flex: 10,
  },

  container10: {
 
    borderColor: "white",
    borderWidth: 2,
    flex: 10,
  },

  container11: {
 
    borderColor: "white",
    borderWidth: 2,
    flex: 10,
  },
});
