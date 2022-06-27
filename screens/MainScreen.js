import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  
} from 'react-native';




export default class MainScreen extends Component {

  render() {
    return (
      <View style={styles.textContainer}>
      <Text style={styles.text}>Water Remainder</Text>
      <TouchableOpacity>
      <Button title="Sign In With Google" color="red"   onPress={()=>{
        this.props.navigation.navigate("HomeScreen")
      }}/>
      
      </TouchableOpacity>
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
  }


})
     


