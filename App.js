import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import ApiTask from './src/screens/ApiTask';
import IDScreen from './src/screens/IDScreen';
import ApiTask2 from './src/screens/ApiTask2';
import IDScreen2 from './src/screens/IDScreen2';
import Hooks from './src/screens/ReactNativeBasics/Hooks/usestateHook';
import useEffectHook from './src/screens/ReactNativeBasics/useEffectHook';
import useRefDemo from './src/screens/ReactNativeBasics/Hooks/useRefDemo';
import useContextHook from './src/screens/ReactNativeBasics/Hooks/useContextHook';
import ComponentForUseContext from './src/screens/ComponentForUseContext';
import ComponentForUseReducer from './src/screens/ReactNativeBasics/Hooks/ComponentForUseReducer';
import useReducerHook from './src/screens/ReactNativeBasics/Hooks/useReducerHook';
import CallBackScreen from './src/screens/ReactNativeBasics/Hooks/callBack/CallBackScreen';

import Counter1Screen from './src/screens/ReactNativeBasics/Hooks/callBack/Counter1Screen';
import Counter2Screen from './src/screens/ReactNativeBasics/Hooks/callBack/Counter2Screen';
import useLayoutScreen from './src/screens/ReactNativeBasics/Hooks/useLayoutScreen';
import useFocusHook from './src/screens/ReactNativeBasics/Hooks/useFocusHook';

const Stack = createStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="useReducerHook">
      <Stack.Screen name="Hooks" component={Hooks} />
      <Stack.Screen name="ApiTask2" component={ApiTask2} />
        <Stack.Screen name="ApiTask" component={ApiTask} />
        <Stack.Screen name="IDScreen" component={IDScreen} />
        <Stack.Screen name="IDScreen2" component={IDScreen2} />
        <Stack.Screen name="useEffectHook" component={useEffectHook} />
        < Stack.Screen name='useRefDemo' component={useRefDemo}/>
        <Stack.Screen name='useContextHook' component={useContextHook}/>
        <Stack.Screen name='ComponentForUseContext' component={ComponentForUseContext}/>
        <Stack.Screen name='useReducerHook' component={useReducerHook}/> 
        <Stack.Screen name='ComponentForUseReducer' component={ComponentForUseReducer}/>
        <Stack.Screen name='CallBackScreen' component={CallBackScreen}/>
        <Stack.Screen name='Counter1Screen' component={Counter1Screen}/>
        <Stack.Screen name='Counter2Screen' component={Counter2Screen}/>
        <Stack.Screen name='useLayoutScreen' component={useLayoutScreen}/>
        <Stack.Screen name='useFocusHook' component={useFocusHook}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
