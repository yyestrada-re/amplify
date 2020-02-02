import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style = {{ flexDirection: 'row' }}>
        <Image source = {require('../assets/fruit.png')}
          style={{
            width: 50,
            height: 53,
            borderRadius: 60 / 2,
            marginLeft: 12,
            marginRight: 10,
          }}
        />
      </View>
    );
  }
}