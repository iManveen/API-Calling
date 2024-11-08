import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MyContext } from './useReducerHook';


const ComponentForUseReducer = () => {
    const values=useContext(MyContext)
 
    
console.log(values)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{values}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ComponentForUseReducer;
