import React, { Component } from 'react';  
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';  
import Nav from './Nav';
  
 
export default class App extends React.Component {  
  render() {  
    return (  
      <View>  
        <Text style={styles.welcome}>Landing</Text>
        <TouchableHighlight
          style={styles.submit}
          onPress={()=>this.props.navigation.navigate('Home')}
          underlayColor='#fff'>
            <Text style={styles.submitText}>Go to Home</Text>
        </TouchableHighlight>
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
  } ,
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
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
  }
});  