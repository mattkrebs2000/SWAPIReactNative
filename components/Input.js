import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";




const Input = (props) => ( 
      <View>
        <View style={styles.container}>
          <TextInput
            placeholder="Search Here"
            placeholderTextColor="white"
            style={styles.input}
          />
          <Button
            onPress={() => Alert.alert("Simple Button pressed")}
            title="Filter!"
            color="white"
           
        
          />
        </View>
      </View>
    );
export default Input;

const styles = StyleSheet.create({
  input: {
    width:"80%",
    marginHorizontal: 0,
    color: "white",
    fontSize: 28,
    paddingStart: 8,
    
  },
  button: {
    color: "white",
    width: "30%",
    marginEnd: 0,
    
  },
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  },
});
