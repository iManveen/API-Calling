import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const IDScreen = ({route,navigation}) => {
  const {id} = route.params;
  console.log('hello', id);

  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => setData(res?.data))
      .catch(err => console.log(err));
  };
  console.log(data);

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('ApiTask2')}>
      <Text style={styles.title}>{data?.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IDScreen;

const styles = StyleSheet.create({
  container: {padding: 20},
  title: {fontSize: 16, fontWeight: 'bold'},
});
