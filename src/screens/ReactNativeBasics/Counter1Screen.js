import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const Counter1Screen = ({counter1}) => {
    console.log('Component A');
    
  return (
    <View>
      <Text>{counter1}</Text>
    </View>
  )
}

// export default memo(Counter1Screen)
export default Counter1Screen

const styles = StyleSheet.create({})