import React, {createContext, useReducer} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ComponentForUseReducer from './ComponentForUseReducer';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    default:
      return state;
  }
};
export const MyContext =createContext()

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  console.log('State in UseReducerHook:', state);  // Log state to verify

  return (
    <MyContext.Provider value={state}>
    <View style={styles.container}>
      <View style={styles.productView}>
        <Text style={styles.productText}>Blue T-Shirt</Text>
        <Image
          source={{uri: 'https://example.com/blue-tshirt.jpg'}}
          style={styles.image}
        />
        <Text style={styles.priceText}>Price: ₹399</Text>

        {/* Display ComponentForUseReducer */}
        <ComponentForUseReducer />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch({type: 'INCREMENT'});
            }}>
            <Text style={styles.buttonText}>Increase</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
           onPress={() => {
            dispatch({type:'DECREMENT'})
           }}>
            <Text style={styles.buttonText}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </MyContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productView: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  productText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    height: 100,
    width: 100,
    marginVertical: 10,
  },
  priceText: {
    fontSize: 16,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: '#007bff',
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UseReducerHook;
