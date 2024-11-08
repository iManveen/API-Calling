
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from "./FetchProduct"

const DemoAsyncThunkScreen = () => {

    const dispatch=useDispatch()
    const products=useSelector(state=>state);
    console.log(products)




  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={
        ()=>dispatch(fetchProducts())
      } style={styles.button}>
        <Text style={styles.buttonText}>Call API</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default DemoAsyncThunkScreen;
