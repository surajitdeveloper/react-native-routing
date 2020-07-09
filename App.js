import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';
import Routes from './Routes.js'
import { Actions } from 'react-native-router-flux';
  

export default class App extends React.Component {  
  render() {  
    return (  
      <Routes />
    );  
  }  
}