import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {

  
  render() { 
    return ( 
      <View style={styles.headerSection}>
        <Text style={styles.headerTextStyle}>{this.props.headerText}</Text>
      </View>
     );
  }
}
 
export default Header;

const styles = StyleSheet.create({
  headerSection: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerTextStyle: {
   fontSize: 20
  }
});
