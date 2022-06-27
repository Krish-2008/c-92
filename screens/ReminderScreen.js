import React,{Component} from 'react';
import { Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button} from 'react-native';
  
  export default class ReminderScreen extends Component {

  render() {
    return (
      <View style={styles.textContainer}>
     
     
       <Text style={styles.text}>Remaind Me</Text>
       <TouchableOpacity>
        <Button title="1 Hour"/>
       <Button title="2 Hours"/>
        <Button title="3 Hours"/>
         
      
      <Button title="ok" color="red"
        onPress={()=>{
        this.props.navigation.navigate("MainScreen")
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