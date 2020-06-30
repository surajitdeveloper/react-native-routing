import React, { Component } from 'react';  
import { Platform, StyleSheet, Text, View, Button } from 'react-native';  
  
 
export default class Home extends React.Component {  
  render() {  
    return (  
      <View>  
        <Text style={styles.welcome}>Home</Text>
        <Button 
        style={styles.submit} 
        title="Back to landing"
        onPress={()=>this.props.navigation.navigate('Landing')}
        ></Button>
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
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  }
});  