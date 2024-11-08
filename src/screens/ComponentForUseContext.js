import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from './ReactNativeBasics/Hooks/UseContextHook';

const ComponentForUseContext = () => {
  const values = useContext(MyContext);
  return (
    <View>
      <Text>ComponentForUseContext {values}</Text>
    </View>
  );
};

export default ComponentForUseContext;

const styles = StyleSheet.create({});
