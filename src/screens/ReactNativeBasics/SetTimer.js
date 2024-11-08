import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SetTimer = () => {
    const intervalId = setInterval(() => {
        console.log("This will keep printing every 2 seconds");
      }, 2000);
      
      // Stop the interval after 10 seconds
      setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped the interval!");
      }, 10000); 
      
}

export default SetTimer;

const styles = StyleSheet.create({});
