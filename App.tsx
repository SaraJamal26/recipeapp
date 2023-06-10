import {NavigationContainer} from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Providers from './src/navigation';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import NotificationController from './src/config/NotificationController';
const Stack = createNativeStackNavigator();


function App() {
  function saveTokenToFirestore(token: any) {
    const collectionRef = firestore().collection('tokens');
    // Create a new document with a unique ID
    const documentRef = collectionRef.doc();
    documentRef
      .set({
        token: token,
      })
      .then(() => {
        console.log('Token saved successfully to Firestore');
      })
      .catch(error => {
        console.log('Error saving token to Firestore:', error);
      });
  }
  useEffect(() => {
    // Request permission and get FCM token
    messaging()
      .requestPermission()
      .then(() => messaging().getToken())
      .then(token => {
        console.log('FCM token:', token);
        // Save the token to your server for sending push notifications
        saveTokenToFirestore(token);
      })
      .catch(error => {
        console.log('FCM permission request failed:', error);
      });

    // Subscribe to foreground messages
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Received foreground message:', remoteMessage);
      // Handle the received message here
    });

    // Clean up the subscription when the component unmounts
    return unsubscribe;
  }, []);

  // Register background handler for receiving messages in the background
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Received background message:', remoteMessage);
    // Handle the received message here
  });


  return (
    <>
    <NotificationController/>
    <Providers/>
    </>
  );
}

AppRegistry.registerComponent('recipeapp', () => App);
export default App;
