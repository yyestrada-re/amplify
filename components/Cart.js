import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';

import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

class Cart extends React.Component {
  render() {
    return (
      <View style = {{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Groceries')}> 
          <Image source = {require('../assets/cart.png')} style = {styles.imageClass} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageClass: {
    height: 28,
    width: 28,
    marginRight: 22,
  },
});

export default withNavigation(Cart);