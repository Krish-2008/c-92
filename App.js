import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase'
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// You can import from local files
import MainScreen from './screens/MainScreen';

import CalculatorScreen from './screens/CalculatorScreen';

import ReminderScreen from './screens/ReminderScreen';

 import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({


  MainScreen:MainScreen,
  HomeScreen: HomeScreen,
  ReminderScreen:ReminderScreen,
 
 

  CalculatorScreen: CalculatorScreen


});

const AppContainer = createAppContainer(AppSwitchNavigator);
