import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FetchApi} from './FetchApi';
import {deleteApi} from './DeleteApi';

const MainScreen = () => {
  const [fList, setfList] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(state => state);
  console.log('123456780001', products?.product);
  useEffect(() => {
    dispatch(FetchApi());
  }, [dispatch]);

  const renderData = ({item}) => {
    return (
      <TouchableOpacity style={{alignItems: 'center', marginBottom: 20}}>
        <Image source={{uri: item.image}} style={styles.apiImage} />

        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 500,
            marginTop: 20,
          }}>
          {item.search_name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 500,
            marginTop: 20,
          }}>
          {item.search_id}
        </Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(deleteApi(item.search_id));
          }}
          style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Deletes</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Call API</Text>
      </TouchableOpacity> */}
      <FlatList data={products?.product?.data} renderItem={renderData} />
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  apiImage: {
    height: 250,
    width: 250,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MainScreen;
