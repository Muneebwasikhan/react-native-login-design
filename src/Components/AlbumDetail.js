import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumList extends Component {

  render() { 
    return ( 
      <Card >
        <CardSection>
         <Text>{this.props.album.title}</Text>
         </CardSection>
         <CardSection>
         <Text>{this.props.album.title}</Text>
         </CardSection>
      </Card>
     );
  }
}
 
export default AlbumList;

// const styles = StyleSheet.create({
 
// });
