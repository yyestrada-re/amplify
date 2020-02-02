import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import AWS from "aws-sdk";

export default class Home extends React.Component {
  static headerShown = {header: false} 

  componentDidMount() {
    AWS.config.update({region: "us-east-2", credentials:{secretAccessKey: "LvtfTtrz/gSM/fXAaUh/xrqBJLvHLqAYRV3PhMU3", accessKeyId: "AKIA5GSQCVJRPQYHA7VT"}})
    var ddb = new AWS.DynamoDB({apiVersion: "2012-08-10"})
    ddb.listTables({}, function(err,data) {
      if(err) {
        console.log("Error", err.code);
      } else {
        console.log("Tables names are", data.TableNames);
      }
    });

    var params = {
      TableName: "Cart",
    }

    ddb.describeTable(params, function(err,data) {
      if(err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Table.KeySchema)
      }
    })

    var params = {
      TableName: "Fridge",
    }

    ddb.describeTable(params, function(err,data) {
      if(err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Table.KeySchema)
      }
    })

  }

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