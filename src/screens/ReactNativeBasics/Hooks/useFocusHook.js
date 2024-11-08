import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const UseFocusScreen = () => {
  const [message, setMessage] = useState('');

  useFocusEffect(
    useCallback(() => {
      // This runs every time the screen is focused
      setMessage('Welcome back to this screen!');

      return () => {
        // Cleanup: Clear the message when leaving the screen
        setMessage('');
      };
    }, [])
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>{message || 'Loading...'}</Text>
    </View>
  );
};

export default UseFocusScreen;
