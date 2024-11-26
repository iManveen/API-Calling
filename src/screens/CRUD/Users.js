import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Users = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
 <TouchableOpacity onPress={()=>navigation.navigate('AddUser')}style={{height:50,width:150,backgroundColor:'green',justifyContent:"center",alignItems:"center",borderRadius:10}}>
   < Text style={{color:'white'}}>Add New User</Text>
 </TouchableOpacity>
    </View>
  )
}

export default Users

const styles = StyleSheet.create({})