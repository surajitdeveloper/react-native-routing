import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
import { Actions } from 'react-native-router-flux'; 
 
  

export default class Registration extends React.Component {  
    constructor(props) {
        super(props)
    
        this.state = {
    
        }
    } 
  render() {  
    return (  
      <View> 
        <Text style={styles.welcome}>Registration</Text>  
        <Text onPress={()=>this.goto('Login')} style={styles.welcome1}>Login</Text>  
      </View>  
    );  
  }  
  goto = (url) =>{
    alert(url);
    Actions.login();
  }
}  
const styles = StyleSheet.create({  
    welcome: {  
        fontSize: 20,  
        textAlign: 'center',  
        margin: 10,
        fontWeight: "bold"  
      },
      welcome1: {  
        fontSize: 20,  
        textAlign: 'center',  
        margin: 10,
      }   
}); 