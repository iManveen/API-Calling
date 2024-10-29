import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {
  myFetchGetRequest,
  myFetchPostRequest,
  myFetchPutRequest,
  myFetchDeleteRequest,
} from './src/screens/MyFetchApiRequests';
import {
  myAxiosGetRequest,
  myAxiosPostRequest,
  myAxiosPutRequest,
} from './src/screens/MyAxiosRequests';

const App = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // Uncomment to use fetch request
    // const data = {
    //   title: 'abacgddba',
    //   body: 'hekalsdjk',
    //   userId: 1,
    // };
    // const res = await myFetchPutRequest(data);
    // console.log("data", res);

    // Uncomment to use axios GET request
    // await myAxiosGetRequest()
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // Use axios POST request
    // await myAxiosPostRequest({ title: "ssdf", dec: "hdhjk", id: 12 })
    //   .then(res => console.log(res))
    //   .catch(error => console.log(error));
    await myAxiosPutRequest(100, {title: 'ssdf', dec: 'hdhjk', id: 12})
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
