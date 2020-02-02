import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Item from "./Item.js"

export default class Groceries extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
    }
  }

  componentDidMount() {
    AWS.config.update({region: "us-east-2", credentials:{secretAccessKey: "LvtfTtrz/gSM/fXAaUh/xrqBJLvHLqAYRV3PhMU3", accessKeyId: "AKIA5GSQCVJRPQYHA7VT"}})
    var ddb = new AWS.DynamoDB({apiVersion: "2012-08-10"})

    var params = {
      ProjectionExpression: 'CartId, Exp, quant',
      TableName: 'Cart'
    };
    
    ddb.scan(params, (err, data) => {
      let tempList = []
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Items);
        data.Items.forEach(function(element, index, array) {
          tempList = tempList.concat(element)
        });
      }
      this.setState({
        cartList: tempList,
      })
    })
  }

  renderItems() {
    return (this.state.cartList.sort((a,b) => (a.CartId.S > b.CartId.S) ? 1: -1).map((cartItem, index) => {
      return (
        <Item key={index} name={cartItem.CartId.S} expiration={cartItem.Exp.S} quantity={cartItem.quant.N}/>
        // <Text key={index} style = {{fontSize: 25, paddingBottom: 6, alignContent: 'center', color: '#fff'}}>{cartItem.CartId.S}</Text>
      )
    }))
  }

  render() {
    const {navigate} = this.props.navigation;
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
          onPress={() => navigate('NewCartItem')}
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
        <View>{this.renderItems()}</View>
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