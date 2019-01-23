/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import { Button,Input } from "react-native-elements";
import { TextField } from 'react-native-material-textfield';


const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./Assets/view.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.f1}>
            {/* <SvgUri width="200" height="200" source={require('https://www.piaic.org/static/media/Logo.fb7de414.svg')} /> */}
            <Image
              style={{ width: 150, height: 75 }}
              source={{
                uri: "https://www.panacloud.ai/assets/images/global/Logo.png"
              }}
            />
          </View>
          <View style={styles.f2}>
            {/* <Button titleStyle={{fontSize: 15}} buttonStyle={styles.loginBtn} title="LOGIN" /> */}
            <View style={styles.loginSection}>
            <TextInput
          style={styles.inputFiledLogin}
          placeholder="Type here to translate!"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({text})}
        />
         <TextField
        label='Phone number'
        value="gfgff"
      />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  inputFiledLogin:{
    width: '80%',
    // backgroundColor: 'white',
    height: 40,
    marginLeft: '10%',
    borderTopColor: 'white',
    borderTopWidth: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    fontSize: 15,
    

  },
  loginSection:{
    width: '100%',
    height: '100%',
    backgroundColor: '#101b11',
    opacity: 0.9,
  },
  loginBtn:{
    backgroundColor: "#101b11",
    height: 70,
    width: "100%",
    borderRadius: 0,

  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  f1: {
    height: "50%",
    width: "100%",
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  f2: {
    height: "50%",
    width: "100%",
    justifyContent: "flex-end"
    // backgroundColor: "red"
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
