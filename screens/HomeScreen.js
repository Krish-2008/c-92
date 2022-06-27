import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  
} from 'react-native';




export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.textContainer}>
      <View>

      <Text style={styles.text}>Hydrate Yourself</Text>
      
       <TouchableOpacity style={styles.button}
      onPress={()=>{
        this.props.navigation.navigate("CalculatorScreen")
      }}>
      <Text style={styles.buttonText}>Water Intake</Text>
      </TouchableOpacity>
    
      
      <TouchableOpacity style={styles.button}
      onPress={()=>{
        this.props.navigation.navigate("ReminderScreen")
      }}>
      <Text style={styles.buttonText}>Remind Me</Text>
      </TouchableOpacity>
      </View>
      </View>

    )
  }
}


const styles=StyleSheet.create({
  textContainer:{
    backgroundColor:"violet"

  },
  text:{
    color:"white",
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    padding:20
  },
  button:{
    marginTop:100,
    marginLeft:80,
    width:200,
    height:200,
    backgroundColor:"red",
    borderWidth:1,
    borderColor:"red",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:100

  },
  buttonText:{
    fontWeight:"bold",
    fontSize:20,
    
  }


})
     


