import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const deviceW = Dimensions.get('window').width;

const ApiTask2 = ({navigation}) => {
  const [data, setData] = useState([]);
  const url = 'https://mallorca-ai.azurewebsites.net/search';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwaG9lbml4aW1tYW5lbnRAZ21haWwuY29tIiwiZXhwIjoxNzMyNzg4MDM4fQ.RxlQqBPw95_Bzy4KKM2rXzQMYhOhqHQ-ErqxvXkPPOw';

  const fetchData = async () => {
    try {
      const response = await axios.post(
        url,
        {
          longitude: 38.5,
          latitude: 1.12,
          radius: 1000,
          map_view: false,
          page: 1,
          bedrooms_min: 1,
          bedrooms_max: 5,
          price_max: 15000000,
          listing_type: 'apartment',
          sort_by: 'price',
          sort_asc: false,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setData(response.data.results);
    } catch (error) {
      console.log(
        'Error making post request',
        error.response ? error.response.data : error.message,
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigationFunction=item=>{
    navigation.navigate('IDScreen2',{property_id:item.property_id})


  }
  const renderData = ({item}) => {
    return (
    
      <TouchableOpacity onPress={()=>navigationFunction(item)} style={{backgroundColor:"lightblue",marginBottom:20,alignItems:"center",justifyContent:"center"}}>
        <Image
          source={{uri: item.images[0]}}
          style={{
            width: 250,
            height: 250,
            alignSelf: 'center',
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 20,
            fontWeight: 400,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: 'red',
            marginBottom: 20,
            textAlign: 'center',
          }}>
          Price:{item.price}
        </Text>
        </TouchableOpacity>

    );
  };
  console.log('responsedata', data);

  return (
    <View style={{flex: 1, width: deviceW - 40, alignSelf: 'center'}}>
      <FlatList data={data} renderItem={renderData} />
    </View>
  );
};

export default ApiTask2;

const styles = StyleSheet.create({});
