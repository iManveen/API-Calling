import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';


const HomeNotifi = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getFcmToken();
  }, []);

  const getFcmToken = async () => {
    const token = await messaging().getToken();
    console.log('Raw token value:', token);
    displayNotification(title, body);
  };
  const displayNotification = async (title, body) => {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'default channel',
      vibration: true,
      importance: AndroidImportance.HIGH,
      vibrationPattern: [300, 500],
    });
    await notifee.displayNotification({
      title: title,
      body: body,
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default',
        },
      },
    });
  };
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const {title, body} = remoteMessage.notification;
      console.log("message recieved", title)
      displayNotification(title,body);
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationScreen')}>
        <Text>HomeNotifi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeNotifi;

const styles = StyleSheet.create({});
