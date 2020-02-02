import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';

import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

class House extends React.Component { /*back to Home*/
  render() {
    return (
      <View style = {{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}> 
          <Image source = {require('../assets/home.png')} style = {styles.imageClass} />
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

export default withNavigation(House);