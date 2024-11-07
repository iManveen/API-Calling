import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const IDScreen2 = ({route}) => {
  const {item} = route.params;
  console.log('hello11', item);
  const [data, setData] = useState(null);
  const [uriImage, setUriImage] = useState(item.images[0]);

  useEffect(() => {
    fetchData();
  }, [item]);
  const url = '  https://mallorca-ai.azurewebsites.net/property-detail';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwaG9lbml4aW1tYW5lbnRAZ21haWwuY29tIiwiZXhwIjoxNzMyNzg4MDM4fQ.RxlQqBPw95_Bzy4KKM2rXzQMYhOhqHQ-ErqxvXkPPOw';

  const fetchData = async () => {
    try {
      const response = await axios.post(
        url,
        {
          property_id: item.property_id,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setData(response.data);
      console.log('hi', response.data);
    } catch (error) {
      console.log(
        'Error making post request',
        error.response ? error.response.data : error.message,
      );
    }
  };
  const imageFunction = () => {};

  const renderData = ({item}) => {
    return (
      <View>
        {/* <Image source={item.item.images} style={{height:50,width:50}} />
        <Image source={item.images} style={{height:50,width:50}} /> */}
        <TouchableOpacity
          onPress={() => setUriImage(item)}
          style={{
            height: 80,
            width: 80,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 220,
          }}>
          <Image source={{uri: item}} style={{height: 70, width: 70}} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: uriImage}}
        style={{height: 300, width: 300}}>
        <FlatList horizontal data={item.images} renderItem={renderData} />
      </ImageBackground>
      <Text>{data?.title}</Text>
      <Text>{data?.description}</Text>
      <Text>{data?.price}</Text>
      <Text>{data?.domain}</Text>
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
