import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

export default class App extends React.Component {

  render() {
    
      return (
        <View>
          <ImageBackground
            source={{
              uri:
                "https://media3.giphy.com/media/xT8qB50yhFINpFTymI/giphy.gif?cid=ecf05e47hqtkvdotl7need9e9iyo23p6n2p5t75fa82ht78o&rid=giphy.gif",
            }}
            style={{ width: 400, height: 800 }}
          >
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, .8)",
                width: 400,
                height: 800,
                opacity: "80%",
              }}
            >
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