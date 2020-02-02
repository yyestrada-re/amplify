import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class Groceries extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity
          style={{
          borderWidth: 1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          width: 70,
          position: 'absolute',                                          
          bottom: 130,                                                    
          right: 20,
          height: 70,
          backgroundColor:'#9AB4FD',
          borderRadius:100,}}
         >
          <Text style = {{fontSize: 42, paddingBottom: 6, alignContent: 'center', color: '#fff'}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
          borderWidth: 1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          width: 70,
          position: 'absolute',                                          
          bottom: 40,                                                    
          right: 20,
          height: 70,
          backgroundColor:'#9AB4FD',
          borderRadius:100,}}
         >
          <Text style = {{fontSize: 45, alignContent: 'center', paddingBottom: 36, color: '#fff'}}>_</Text>
        </TouchableOpacity>
        <Text style = {{fontSize: 30, alignContent: 'center', paddingLeft: 15, paddingTop: 25, lineHeight: 48, paddingBottom: 8, color: '#fff'}}>hey! here's your current shopping list:</Text>
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