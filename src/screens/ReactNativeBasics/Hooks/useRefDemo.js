// we use useRef - 1) ON RENDERING THE PAGE THE VALUES DO NOT LOSS 2)we can directly access functions and properties from DOM
// 3) we save components from rendering again and  again 
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'

const useRefDemo = () => {
  // Creating a ref using useRef
  const inputRef = useRef();

  console.log(inputRef);  // Logs the ref object, which can be used to directly access the input

  return (
    <View style={styles.container}>
      {/* Assign the ref to the TextInput */}
      <TextInput 
        ref={inputRef} 
        style={{backgroundColor:"pink"}}
        placeholder='Enter Name'
      
      />
      <Text onPress={()=>inputRef.current.focus()}>Focus</Text>
      <TextInput/>
    </View>
  )
}

export default useRefDemo

const styles = StyleSheet.create({})