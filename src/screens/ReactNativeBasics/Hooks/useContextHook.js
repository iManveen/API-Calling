import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react' // useContext is made to prevent or reduce the issue of prop drilling also we use it for fix values ,we cant do more manipulations, for that we use usereducer or redeux
import ComponentForUseContext from '../../ComponentForUseContext'

let x="Hello how are you"

export const MyContext=createContext();

const useContextHook = () => {
  return (
    <MyContext.Provider value={x}>
    <View>
      <Text>useContextHook</Text>
      <ComponentForUseContext/>
    </View>
    </MyContext.Provider>
  )
}

export default useContextHook

const styles = StyleSheet.create({})