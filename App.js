import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ApiTask from './src/screens/ApiTask';
import IDScreen from './src/screens/IDScreen';
import ApiTask2 from './src/screens/ApiTask2';
import IDScreen2 from './src/screens/IDScreen2';
import Hooks from './src/screens/ReactNativeBasics/Hooks/UsestateHook';

import ComponentForUseContext from './src/screens/ComponentForUseContext';
import ComponentForUseReducer from './src/screens/ReactNativeBasics/Hooks/ComponentForUseReducer';

import CallBackScreen from './src/screens/ReactNativeBasics/Hooks/callBack/CallBackScreen';

import Counter1Screen from './src/screens/ReactNativeBasics/Counter1Screen';
import Counter2Screen from './src/screens/ReactNativeBasics/Counter2Screen';

import AllFlatlists from './src/screens/ReactNativeBasics/FlatList/AllFlatlists';
import NestedFlatList from './src/screens/ReactNativeBasics/FlatList/NestedFlatList';
import {PersistGate} from 'redux-persist/integration/react';
import UseContextHook from './src/screens/ReactNativeBasics/Hooks/UseContextHook';
import UseReducerHook from './src/screens/ReactNativeBasics/Hooks/UseReducerHook';
import UseEffectHook from './src/screens/ReactNativeBasics/Hooks/UseEffectHook';
import UseRefDemo from './src/screens/ReactNativeBasics/Hooks/UseRefDemo';
import UseLayoutScreen from './src/screens/ReactNativeBasics/Hooks/UseLayoutScreen';
import SetTimer from './src/screens/ReactNativeBasics/SetTimer';
import {Provider} from 'react-redux';
// import store, {
//   persistor,
// } from './src/screens/ReactNativeBasics/AsyncThunk/Store';
import DemoAsyncThunkScreen from './src/screens/ReactNativeBasics/AsyncThunk/DemoAsyncThunkScreen';
import AsyncThunkComplete from './src/screens/ReactNativeBasics/Async Storage/AsyncThunkComplete';
import AsyncStorageComplete from './src/screens/ReactNativeBasics/Async Storage/AsyncStorageComplete';
import MainScreen from './src/screens/APITask11Nov/MainSreen';
import store, {persistor} from './src/screens/APITask11Nov/Store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen name="Hooks" component={Hooks} />
            <Stack.Screen name="ApiTask2" component={ApiTask2} />
            <Stack.Screen name="ApiTask" component={ApiTask} />
            <Stack.Screen name="IDScreen" component={IDScreen} />
            <Stack.Screen name="IDScreen2" component={IDScreen2} />
            <Stack.Screen name="UseEffectHook" component={UseEffectHook} />
            <Stack.Screen name="UseRefDemo" component={UseRefDemo} />
            <Stack.Screen name="UseContextHook" component={UseContextHook} />
            <Stack.Screen
              name="ComponentForUseContext"
              component={ComponentForUseContext}
            />
            <Stack.Screen name="UseReducerHook" component={UseReducerHook} />
            <Stack.Screen
              name="ComponentForUseReducer"
              component={ComponentForUseReducer}
            />
            <Stack.Screen name="CallBackScreen" component={CallBackScreen} />
            <Stack.Screen name="Counter1Screen" component={Counter1Screen} />
            <Stack.Screen name="Counter2Screen" component={Counter2Screen} />
            <Stack.Screen name="UseLayoutScreen" component={UseLayoutScreen} />
            <Stack.Screen name="AllFlatLists" component={AllFlatlists} />
            <Stack.Screen name="NestedFlatList" component={NestedFlatList} />
            <Stack.Screen name="SetTimer" component={SetTimer} />
            <Stack.Screen
              name="AsyncStorageComplete"
              component={AsyncStorageComplete}
            />
            <Stack.Screen
              name="DemoAsyncThunkScreen.js"
              component={DemoAsyncThunkScreen}
            />
            <Stack.Screen
              name="AsyncThunkComplete"
              component={AsyncThunkComplete}
            />
            <Stack.Screen name="MainScreen" component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
