import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';  
  
 
export default class Home extends React.Component {  
  render() {  
    return (  
      <View>  
        <Text style={styles.welcome}>Home</Text>
      </View>  
    );  
  }  
}  
const styles = StyleSheet.create({  
  welcome: {  
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
    width: "100%"
  }
});  