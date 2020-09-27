import React from "react";

// import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import Output from "./Output";

// class ResultsContainer extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//           <Output />
//         </View>
//       </View>
//     );
//   }
// }

const ResultsContainer = (props) => (
  <View style={styles.container}>
    <View>
      <Output 
      height={props.height}
      width={props.width} />
    </View>
  </View>
);

export default ResultsContainer;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },

  help: {
   
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "flex-start",
    justifyContent: "center",
    color: "red",
    fontSize: 20,
  },
});
