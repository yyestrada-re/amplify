import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet, Button } from 'react-native';

export default class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View>
        <Text style = {{fontSize: 25, paddingBottom: 6, alignContent: 'center', color: '#fff'}}>{this.props.name}</Text>
        <Text style = {{fontSize: 15, paddingBottom: 6, alignContent: 'center', color: '#fff'}}>{"Expiration: " + this.props.expiration}</Text>
        <Text style = {{fontSize: 15, paddingBottom: 18, alignContent: 'center', color: '#fff'}}>{"Quantity: " + this.props.quantity}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    width: '100%',
    color: 'white',
    height: '100%',
  },
});