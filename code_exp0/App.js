import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Demo from './Demo';

export default function App() {
    // var counter = 0 - this is a regular variable. THIS WILL NOT WORK.
    // we need to use STATE in order to update counter

    // we are creating a state variable called count. 
    // theres also a fn called setCount which is how we update the count variable
  let [count, setCount] = useState(0)

  function buttonPressed() {
      console.log("You pressed me ouch!!!")
      // counter = counter + 1
      // console.log(count)
      setCount(count + 1) // updates count variable w count + 1
      // in jsx portion below, we can use { } to switch back to JS mode
      // we are asking js to retrieve the value of count, and put it in the html text
  }
  function resetPressed() {
    setCount(0)
  }
  
  function renderEncouragingText() {
    if (count >= 10){
      return "Keep Going!"      
    }
  }

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <TouchableOpacity style={styles.button} onPress = {buttonPressed}>
        <Text style = {styles.buttonText}>Press me!</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.button} onPress={resetPressed}>
        <Text style = {styles.buttonText}>RESET!</Text>
      </TouchableOpacity>
      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encouragingText: {
    marginTop: 50,
    color: 'darkgrey'
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  }
});