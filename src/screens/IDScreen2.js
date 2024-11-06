import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const IDScreen2 = ({route}) => {
  const {property_id} = route.params;
  console.log('hello', property_id);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [property_id]);
  const url = '  https://mallorca-ai.azurewebsites.net/property-detail';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwaG9lbml4aW1tYW5lbnRAZ21haWwuY29tIiwiZXhwIjoxNzMyNzg4MDM4fQ.RxlQqBPw95_Bzy4KKM2rXzQMYhOhqHQ-ErqxvXkPPOw';

  const fetchData = async () => {
    try {
      const response = await axios.post(
        url,
        {
          property_id: property_id,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setData(response.data);
    } catch (error) {
      console.log(
        'Error making post request',
        error.response ? error.response.data : error.message,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data?.title}</Text>
      <Text>{data?.description}</Text>
      <Text>{data?.price}</Text>
      
    </View>
  );
};

export default IDScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
