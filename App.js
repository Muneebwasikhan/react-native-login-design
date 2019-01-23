import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
// import LoginPage from './src/Screens/LoginPage';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// });

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Home" />
        <AlbumList ></AlbumList>
        {/* <LoginPage /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
