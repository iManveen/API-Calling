import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Counter2Screen = ({counter2}) => {
    console.log('Component B');
    
  return (
    <View>
      <Text>{counter2}</Text>
    </View>
  )
}

export default Counter2Screen

const styles = StyleSheet.create({})