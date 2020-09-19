import React from 'react';
import { ImageBackground, View, Text, Image } from 'react-native';


export default class App extends React.Component {

  render() {
    
      return (
        <View style={{ flex: 1, flexDirection: "column" }}>
          <ImageBackground
            source={{
              uri:
                "https://media3.giphy.com/media/xT8qB50yhFINpFTymI/giphy.gif?cid=ecf05e47hqtkvdotl7need9e9iyo23p6n2p5t75fa82ht78o&rid=giphy.gif",
            }}
            style={{ flex: 1, alignItems: "center", width: null, height: null }}
          >
            <View
              style={{
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                opacity: 0.8,
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  alignItems: "center",
                  marginTop:40,
                  width:209,
                  height: 100
                  
                }}
                source={{
                  uri:
                    "http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png",
                }}
              ></Image>

              <Text>Hello</Text>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }

 

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "column",
//     flex: 1
//   }, 
// })