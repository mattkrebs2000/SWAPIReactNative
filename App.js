import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import Selecting from "./components/SelectingContainer";
import Results from "./components/ResultsContainer";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFont = () => {
  return Font.loadAsync({
    myFont: require("./assets/Dosis-VariableFont_wght.ttf"),
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={() => console.log("Error")}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://media3.giphy.com/media/xT8qB50yhFINpFTymI/giphy.gif?cid=ecf05e47hqtkvdotl7need9e9iyo23p6n2p5t75fa82ht78o&rid=giphy.gif",
        }}
        style={styles.bimage}
      >
        
        <View style={styles.overlay}>
         
          <Image
            style={styles.swimage}
            source={{
              uri:
                "http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png",
            }}
          ></Image>
          
          <Selecting />

          <ScrollView>
            <Results />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    fontFamily: "myFont",
  },
  bimage: {
    flex: 1,
    alignItems: "center",
    width: null,
    height: null,
  },
  overlay: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.8,
    alignItems: "center",
  },
  swimage: {
    alignItems: "center",
    marginTop: 40,
    width: 209,
    height: 100,
  },
  
});
