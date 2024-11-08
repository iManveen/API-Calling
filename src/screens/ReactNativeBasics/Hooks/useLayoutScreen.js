import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayoutScreen = () => {    
     // uselayout renders first but its used for the operations we want to execute firstly but don't want to show them on screen 
    const [color,setColor]=useState('')
    useLayoutEffect(()=>{
        console.log('useLayout')
  setColor("green")
    },[])
    useEffect(()=>{
        console.log('useEffect')
      setColor("red")

    },[])
  return (
    <View style={{backgroundColor:color}}>
      <Text>useLayoutScreen</Text>
    </View>
  )
}

export default UseLayoutScreen

const styles = StyleSheet.create({})