import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';


export default class Home extends React.Component {
  static headerShown = {header: false} 

  render() {
    return (
      <View>
        <Text>this is my imaginary list</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#384D5C',
    width: '100%',
    height: '100%',
    borderColor: '#AAABA7'
  }
});