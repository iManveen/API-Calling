// for single name
//---------
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import React, {useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AsyncThunkComplete = () => {
//   const [data, setData] = useState('');

//   const saveData = async () => {
//     try {
//       await AsyncStorage.setItem('DATA', data);
//       console.log('data saved');
      
//     } catch (e) {}
//   };

//   const getData=async()=>{
//     try{
//         const name =await AsyncStorage.getItem('DATA')
//          console.log('NAME',name)
//     }
//     catch(e){



//     }

//   }

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Enter Data"
//         style={{
//           height: 60,
//           width: '80%',
//           padding: 10,
//           borderWidth: 1,
//           marginBottom: 25,
//         }}
//         value={data}
//         onChangeText={txt => setData(txt)}
//       />

//       <TouchableOpacity onPress={()=>saveData()} style={styles.button}>
//         <Text style={styles.buttonText}>Save Data</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={()=>getData()} style={styles.button}>
//         <Text style={styles.buttonText}>Get Data</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },

//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     marginBottom: 20,
//     width: '80%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default AsyncThunkComplete;
//-----

// for multiple names or data 

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
let names = [];
const AsyncThunkComplete = () => {
  const [data, setData] = useState('');
  const [name,setName]=useState('')


  const saveData = async () => {
    names.push(data)
    try {
      await AsyncStorage.setItem('DATA',JSON.stringify(names));
      console.log('data saved');
    } catch (e) {}
  };

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('DATA');
      setName(name)
      
    } catch (e) {}
  };
  console.log('NAME' + name);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Data"
        style={{
          height: 60,
          width: '80%',
          padding: 10,
          borderWidth: 1,
          marginBottom: 25,
        }}
        value={data}
        onChangeText={txt => setData(txt)}
      />

      <TouchableOpacity onPress={() => saveData()} style={styles.button}>
        <Text style={styles.buttonText}>Save Data</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => getData()} style={styles.button}>
        <Text style={styles.buttonText}>Get Data</Text>
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
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AsyncThunkComplete;
