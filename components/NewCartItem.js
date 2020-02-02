import React, {Component} from 'react';
import {TouchableOpacity, TouchableWithoutFeedback, Image, Text, View, StyleSheet, TextInput } from 'react-native';
import Logo from './Logo';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Alert} from 'react-native'

export default class NewCartItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      quantity: '',
      date: new Date(),
      showDate: false,
      showName: false,
      showQuantity: false,
      fridgeList: [],
    };
  }

  componentDidMount() {
    AWS.config.update({region: "us-east-2", credentials:{secretAccessKey: "LvtfTtrz/gSM/fXAaUh/xrqBJLvHLqAYRV3PhMU3", accessKeyId: "AKIA5GSQCVJRPQYHA7VT"}})
    var ddb = new AWS.DynamoDB({apiVersion: "2012-08-10"})
    var params = {
    ProjectionExpression: 'FridgeId, Exp, quant',
    TableName: 'Fridge'
    };
      
    ddb.scan(params, (err, data) => {
    let tempList = []
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Items);
        data.Items.forEach(function(element, index, array) {
        tempList = tempList.concat(element.FridgeId.S)
        });
    }
    this.setState({
        fridgeList: tempList,
    })
    });
  }

  handleSubmit = () => {
    AWS.config.update({region: "us-east-2", credentials:{secretAccessKey: "LvtfTtrz/gSM/fXAaUh/xrqBJLvHLqAYRV3PhMU3", accessKeyId: "AKIA5GSQCVJRPQYHA7VT"}})
    var ddb = new AWS.DynamoDB({apiVersion: "2012-08-10"})
    let check = this.state.fridgeList.filter((item) => item.toLowerCase() === this.state.itemName.toLowerCase())
    if(check.length > 0) {
        Alert.alert("you already have this item!")
    } else {
        var params = {
        TableName: 'Cart',
        Item: {
            'Exp' : {S: this.state.date.toLocaleDateString()},
            'CartId' : {S: this.state.itemName},
            'quant' : {N: this.state.quantity},
        }
        };
        
        // Call DynamoDB to add the item to the table
        ddb.putItem(params, function(err, data) {
        if (err) {
            Alert.alert("Please enter valid inputs")
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
    const {navigate} = this.props.navigation;
    return (
      <View style = {styles.container}>
          <Text style = {{fontSize: 30, alignContent: 'center', paddingLeft: 15, paddingTop: 25, lineHeight: 48, color: '#fff'}}>add a new item!</Text>
          <Text style = {{fontSize: 18, alignContent: 'center', paddingLeft: 15, lineHeight: 48, paddingBottom: 8, color: '#fff'}}>to shopping cart</Text>
          <TextInput
            style={{height: 40, width: 200, backgroundColor: '#fff', borderRadius: 4,}}
            placeholder="item name"
            onChangeText={(text) => this.setState({itemName: text})}
            value={this.state.itemName}
            maxLength={30}
            spellCheck={true}
          />
          <TextInput
            style={{height: 40, width: 100, backgroundColor: '#fff', borderRadius: 4,}}
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
                  style={{backgroundColor: '#fff',}}
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
                  alignItems:'center',
                  justifyContent:'center',
                  width: 100,
                  position: 'absolute',                                          
                  bottom: 0,                                                    
                  right: 20,
                  height: 70,
                  backgroundColor:'#9AB4FD',
                  borderRadius: 20,}}>
                  <Text style = {{fontSize: 14, paddingBottom: 6, alignContent: 'center', color: '#fff'}}>Select expiration</Text>
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
            onPress={() => this.props.navigation.navigate('Groceries')}>
            <Text style = {{fontSize: 18, paddingBottom: 6, alignContent: 'center', color: '#fff'}}>Done</Text>
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