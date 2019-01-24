import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = {
    albumList: []
  }

componentDidMount = () => {
  console.log(this);
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  .then(res => this.setState({ albumList: res.data }));
}

// eslint-disable-next-line max-len
renderAlbums = () => this.state.albumList.map(val => <AlbumDetail album={val} key={val.title} />)

  
  render() { 
    return ( 
      <View >
        {this.renderAlbums()}
      </View>
     );
  }
}
 
export default AlbumList;

// const styles = StyleSheet.create({
 
// });
