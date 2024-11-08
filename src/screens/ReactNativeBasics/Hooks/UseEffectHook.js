import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffectHook = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  const increaseCount = () => {
    setValue(value + 1);
  };
  const increaseCount1 = () => {
    setValue1(value1 + 1);
  };
  useEffect(() => {
    console.log('hello'); // calling again and again
  });
  useEffect(() => {
    console.log('bye'); // calling on screen load only
  }, []);
  useEffect(() => {
    console.log('hello world'); // depends on change of value
  }, [value]);

  return (
    <View>
      <Text style={styles.countText}>{value}</Text>
      <TouchableOpacity style={styles.button} onPress={() => increaseCount()}>
        <Text style={styles.buttonText}>Increase Count</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{value1}</Text>
      <TouchableOpacity style={styles.button} onPress={() => increaseCount1()}>
        <Text style={styles.buttonText}>Increase Count</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseEffectHook;

const styles = StyleSheet.create({
  countText: {
    marginTop: 30,
  },
});
