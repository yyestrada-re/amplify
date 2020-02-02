import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import React, {Component} from 'react';
import Logo from './components/Logo';

import Home from './components/Home';
import Cart from './components/Cart';
import Inventory from './components/Inventory';
import Groceries from './components/Groceries';
import NewCartItem from './components/NewCartItem';
import House from './components/House';

const RootStack = createStackNavigator({
  Home: { //original list
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerShown: true,
      title: ' amplify.',
      headerLeft: () => <Logo/>,
      headerRight: () => <Cart/>,
      headerStyle: {backgroundColor: '#9AB4FD', height: 110},
      headerTitleStyle: {color: 'white'},
    })
  },        
  Cart: {screen: Cart},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  Inventory: {
    screen: Inventory,
    navigationOptions: ({ navigation }) => ({
      headerShown: true,
      title: 'amplify.',
      headerLeft: () => <Logo/>,
      headerRight: () => <Cart/>,
      headerStyle: {backgroundColor: '#9AB4FD', height: 110},
      headerTitleStyle: {color: 'white'},
    }
  )},
  Groceries: {
    screen: Groceries,
    navigationOptions: ({ navigation }) => ({
      headerShown: true,
      title: 'amplify.',
      headerLeft: () => <Logo/>,
      headerRight: () => <House/>,
      headerStyle: {backgroundColor: '#9AB4FD', height: 110},
      headerTitleStyle: {color: 'white'},
    }
  )},
  NewCartItem: {screen: NewCartItem},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  Inventory: {
    screen: Inventory,
    navigationOptions: ({ navigation }) => ({
      headerShown: true,
      title: 'amplify.',
      headerLeft: () => <Logo/>,
      headerRight: () => <Cart/>,
      headerStyle: {backgroundColor: '#9AB4FD', height: 110},
      headerTitleStyle: {color: 'white'},
    }
  )},
});
                                                                                                                                             
const App = createAppContainer(RootStack);

export default App;
