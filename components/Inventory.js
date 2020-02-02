import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet, TextInput } from 'react-native';
import Logo from './Logo';

export default class Inventory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemName: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({
      itemName: event.target.value,
    })
  }

  handleSubmit = () => {
    
  }

  static navigationOptions = {
    headerLeft: () => <Logo/>,
    headerStyle: {
      backgroundColor: '#000000',
    },
  };
  render() {
    return (
      <View style = {styles.container}>
          <Text style = {{fontSize: 30, alignContent: 'center', paddingLeft: 15, paddingTop: 25, lineHeight: 48, paddingBottom: 8, color: '#fff'}}>add a new item!</Text>
          <TextInput
            style={{height: 50, width: 200, backgroundColor: '#fff',}}
            placeholder="enter item name"
            onChange={this.handleNameChange}
            value={this.state.itemName}
            maxLength={30}
          />
          <TouchableOpacity
            style={{
            borderWidth: 1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width: 100,
            position: 'absolute',                                          
            bottom: 130,                                                    
            right: 20,
            height: 70,
            backgroundColor:'#9AB4FD',
            borderRadius: 20,}}
            onPress={this.handleSubmit}>
            <Text style = {{fontSize: 20, paddingBottom: 6, alignContent: 'center', color: '#fff'}}>add</Text>
          </TouchableOpacity>
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