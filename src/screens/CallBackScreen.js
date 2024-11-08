import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Counter1Screen from './Counter1Screen';
import Counter2Screen from './Counter2Screen';//memoist deal with values and callback deal with functions
// useCallBack returns memoist function and useMemo returns memoist value 
const CallBackScreen = () => {
  const [counter1,setCounter1]=useState(0)
  const [counter2,setCounter2]=useState(0)
  const increaseCounter2=useCallback(()=>{
    setCounter2(
      counter2+1


    )
  },[counter2])
  // const increaseCount1=()=>{
  //   setCounter1(counter1+1)
  // }
  const increaseCount1=useCallback(()=>{
    setCounter1(
      counter1+1


    )
  },[counter1])
  return (
    <View style={styles.container}>
      <Counter1Screen counter1={counter1}/>
      <Counter2Screen counter2={counter2}/>
      
      <TouchableOpacity style={styles.button} onPress={() => {increaseCount1()}}>
        <Text style={styles.buttonText}>Counter 1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => {increaseCounter2()}}>
        <Text style={styles.buttonText}>Counter 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CallBackScreen;
