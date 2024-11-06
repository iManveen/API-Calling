import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import ApiTask from './src/screens/ApiTask';
import IDScreen from './src/screens/IDScreen';
import ApiTask2 from './src/screens/ApiTask2';
import IDScreen2 from './src/screens/IDScreen2';

const Stack = createStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ApiTask2">
      <Stack.Screen name="ApiTask2" component={ApiTask2} />
        <Stack.Screen name="ApiTask" component={ApiTask} />
        <Stack.Screen name="IDScreen" component={IDScreen} />
        <Stack.Screen name="IDScreen2" component={IDScreen2} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
