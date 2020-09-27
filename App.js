import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Text,
} from "react-native";
import Selecting from "./components/SelectingContainer";
import Results from "./components/ResultsContainer";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFont = () => {
  return Font.loadAsync({
    myFont: require("./assets/GildaDisplay-Regular.ttf"),
  });
};

const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState(Dimensions.get("screen"));

  useEffect(() => {
    const onChange = (result) => {
      setScreenData(result.screen);
    };

    Dimensions.addEventListener("change", onChange);

    return () => Dimensions.removeEventListener("change", onChange);
  });

  return {
    ...screenData,
    isLandscap: screenData.width > screenData.height,
  };
};

function App() {
  const screenData = useScreenDimensions();
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

  console.log(
    "If you need to manipulate based on screen use 'isLandscap'",
    screenData.width,
  );

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
          <SafeAreaView style={styles.center}>
            <Image
              style={styles.swimage}
              source={{
                uri:
                  "http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png",
              }}
            ></Image>
            <Selecting
              style={styles.selecting}
              height={screenData.height}
              width={screenData.width}
            />
            <ScrollView>
              <Results
                style={styles.Results}
                height={screenData.height}
                width={screenData.width}
              />
            </ScrollView>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  bimage: {
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
    width: 230,
    height: 100,
  },
  center: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  selecting: {
    flex: 1,
  },
  Results: {
    flex: 2,
  },
});
