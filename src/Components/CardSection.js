import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CardSection extends Component {
  
  render() { 
    return ( 
      <View style={Styles.cardContainerStyle}>
        {this.props.children}
      </View>
     );
  }
}
 
export default CardSection;

const Styles = StyleSheet.create({
  cardContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'flex-row',
    borderColor: '#ddd',
    position: 'relative'
  }
})
