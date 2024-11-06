import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ApiTask = ({navigation}) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(resp => setData(resp.data))
      .catch(err => console.log(err));
  };

  const navigateFunction = item => {
    navigation.navigate('IDScreen', {id: item.id});
  };

  const renderData = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigateFunction(item)}
        style={styles.mainView}>
        <Text style={{color: 'red', fontWeight: '500'}}>{item.title}</Text>
        <Text style={{fontSize: 16, fontWeight: '600'}}>
          Status: {item.completed ? 'Completed' : 'Not Completed'}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderData}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ApiTask;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'pink',
    marginBottom: 20,
    height: 50,
    justifyContent: 'center',
    padding: 10,
  },
});
