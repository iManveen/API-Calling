import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
 const deviceW = Dimensions.get('window').width;
const AddUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Mobile:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your mobile number"
        value={mobile}
        keyboardType="phone-pad"
        onChangeText={setMobile}
      />
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
        multiline
      />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Save User</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddUser

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container:{
    flex:1,
    width:deviceW-40,
    alignSelf:"center",
    padding:50,
  }
});