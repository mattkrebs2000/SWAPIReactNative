import React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { AppLoading, Font } from "expo";

const Output = (props) => (
  <View>
    <View style={styles.container} width={props.width - 35} maxWidth={650}>
      <View style={styles.container5}>
        <View style={styles.container7}>
          <View style={styles.face}>
            <View style={styles.text}>
              {props.name === "R2-D2" ? (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/R2-D2.png")}
                />
              ) : props.name === "Beru Whitesun lars" ? (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/BeruWhitesunlars.png")}
                />
              ) : props.name === "Biggs Darklighter" ? (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/BiggsDarklighter.png")}
                />
              ) : props.name === "C-3PO" ? (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/C-3PO.png")}
                />
              ) : props.name === "Darth Vader" ? (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/DarthVader.png")}
                />
              ) : props.name === "Leia Organa" ? (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/LeiaOrgana.png")}
                />
              ) : props.name === "Luke Skywalker" ? (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/LukeSkywalker.png")}
                />
              ) : props.name === "Obi-Wan Kenobi" ? (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/Obi-WanKenobi.png")}
                />
              ) : props.name === "Owen Lars" ? (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/OwenLars.png")}
                />
              ) : props.name === "R5-D4" ? (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/R5-D4.png")}
                />
              ) :  (
                <Image
                  style={styles.faces}
                  source={require("../assets/images/R2-D2.png")}
                />
              )
               
              }
            </View>
          </View>
        </View>
        <View style={styles.container8}>
          <View style={styles.container10}>
            <Text style={styles.text2}>{props.name}</Text>
          </View>
          <View style={styles.container11}>
            <Text style={styles.text3}>
              Height:{props.height} Weight:{props.weight}
            </Text>
          </View>
        </View>
        <View style={styles.container9}>
          <Text style={styles.text4}>{props.gender}</Text>
        </View>
      </View>
      <View style={styles.container6}>
        <Text style={styles.text3}>
          Eyes:{props.eyes} Hair: {props.hair}
        </Text>
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
    flex: 13,
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
  faces: {
    width:40,
    height: 40,
  },
});

// {
//   props.name === "R2-D2" ? (
//     <Image source={{ uri: "./images/R2-D2.png" }} />
//   ) : props.name === "C-3PO" ? (
//     <Image source="./C-3PO.png" alt="?"></Image>
//   ) : props.name === "Luke Skywalker" ? (
//     <Image source="./images/Luke Skywalker.png" alt="?"></Image>
//   ) : props.name === "Beru Whitesun lars" ? (
//     <Image source="./images/Beru Whitesun lars.png" alt="?"></Image>
//   ) : props.name === "Biggs Darklighter" ? (
//     <Image
//       source="./assets/images/Biggs Darklighter.png"
//       alt="?"
//       style={{ width: "95%", height: "97.5%" }}
//     ></Image>
//   ) : props.name === "Darth Vader" ? (
//     <Image source="./images/Darth Vader.png" alt="?"></Image>
//   ) : props.name === "Leia Organa" ? (
//     <Image source="./images/Leia Organa.png" alt="?"></Image>
//   ) : props.name === "Obi-Wan Kenobi" ? (
//     <Image source="./images/Obi-Wan Kenobi.png" alt="?"></Image>
//   ) : props.name === "Owen Lars" ? (
//     <Image source="./images/Owen Lars.png" alt="?"></Image>
//   ) : props.name === "R5-D4" ? (
//     <Image source="./images/R5-D4.png" alt="?"></Image>
//   ) : (
//     "image"
//   );
// }