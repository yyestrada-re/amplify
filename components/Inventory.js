import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import Logo from './Logo';

export default class Inventory extends React.Component {
  static navigationOptions = {
    headerLeft: () => <Logo/>,
    headerStyle: {
      backgroundColor: '#000000',
    },
  };
  render() {
    return (
      <View style = {styles.container}>
          <Text style = {{fontSize: 30, alignContent: 'center', paddingLeft: 15, paddingTop: 25, lineHeight: 48, paddingBottom: 8, color: '#000000'}}>hola:)))))))))))0:</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    borderColor: '#AAABA7'
  },
});