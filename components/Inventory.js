import React, {Component} from 'react';
import {TouchableOpacity, TouchableWithoutFeedback, Image, Text, View, StyleSheet, TextInput } from 'react-native';
import Logo from './Logo';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class Inventory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      quantity: '',
      date: new Date(),
      showDate: false,
      showName: false,
      showQuantity: false,
    };
  }

  handleSubmit = () => {
    AWS.config.update({region: "us-east-2", credentials:{secretAccessKey: "LvtfTtrz/gSM/fXAaUh/xrqBJLvHLqAYRV3PhMU3", accessKeyId: "AKIA5GSQCVJRPQYHA7VT"}})
    var ddb = new AWS.DynamoDB({apiVersion: "2012-08-10"})
    var params = {
      TableName: 'Fridge',
      Item: {
        'Exp' : {S: this.state.date.toLocaleDateString()},
        'FridgeId' : {S: this.state.itemName},
        'quant' : {N: this.state.quantity},
      }
    };
    
    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });

    this.setState({
      itemName: '',
      quantity: '',
      date: new Date(),
      showDate: false,
      showName: false,
      showQuantity: false,
    })
  }

  showDatepicker = () => {
    this.setState({
      showDate: true,
    })
  }

  hideDatepicker = () => {
    console.log("I clicked outside of it")
    this.setState({
      showDate: false,
    })
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
          <Text style = {{fontSize: 30, alignContent: 'center', paddingLeft: 15, paddingTop: 25, lineHeight: 48, color: '#fff'}}>add a new item!</Text>
          <Text style = {{fontSize: 18, alignContent: 'center', paddingLeft: 15, lineHeight: 48, paddingBottom: 8, color: '#fff'}}>to your fridge/pantry</Text>
          <TextInput
            style={{height: 40, width: 200, backgroundColor: '#fff', borderRadius: 4, paddingLeft: 20, marginLeft: 20, marginBottom: 15}}
            placeholder="item name"
            onChangeText={(text) => this.setState({itemName: text})}
            value={this.state.itemName}
            maxLength={30}
            spellCheck={true}
          />
          <TextInput
            style={{height: 40, width: 200, backgroundColor: '#fff', borderRadius: 4, paddingLeft: 20, marginLeft: 20}}
            placeholder="quantity"
            onChangeText={(text) => this.setState({quantity: text})}
            value={`${this.state.quantity}`}
            min="0"
            keyboardType="numeric"
          /> 
          {this.state.showDate ? (
            <TouchableWithoutFeedback 
              onPress={ () => this.setState({showDate:false}) }
            >
              <View>
                <DateTimePicker value={this.state.date}
                  is24Hour={true}
                  display="default"
                  onChange={this.setDate}
                  style={{backgroundColor: '#000000',}}
                />
              </View>
            </TouchableWithoutFeedback>
            ) : (
              <View>
                <TouchableOpacity 
                  onPress={this.showDatepicker} 
                  title="Show date picker!" 
                  style={{
                  borderWidth: 1,
                  borderColor:'rgba(0,0,0,0.2)',
                  width: 200,
                  position: 'relative',      
                  paddingLeft: 20,
                  paddingTop: 12,                                    
                  marginLeft: 38,    
                  marginTop: 20,                                              
                  right: 20,
                  color: 'white',
                  height: 50,
                  backgroundColor:'#9AB4FD',
                  borderRadius: 20,}}>
                  <Text style = {{fontSize: 14, paddingBottom: 6, alignContent: 'center', color: '#fff'}}>select expiration</Text>
                </TouchableOpacity>
              </View>
            )
          }
          <TouchableOpacity
            style={{
            borderWidth: 1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width: 100,
            position: 'absolute',                                          
            bottom: 30,                                                    
            right: 20,
            height: 70,
            backgroundColor:'#9AB4FD',
            borderRadius: 20,}}
            onPress={this.handleSubmit}>
            <Text style = {{fontSize: 20, paddingBottom: 6, alignContent: 'center', color: '#fff'}}>add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
            borderWidth: 1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width: 65,
            position: 'absolute',                                          
            bottom: 500,                                                    
            right: 25,
            height: 30,
            borderRadius: 20,}}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style = {{fontSize: 18, paddingBottom: 6, alignContent: 'center', color: '#fff'}}>done :)</Text>
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