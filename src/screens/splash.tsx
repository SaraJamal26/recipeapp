import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
// import Home from './home';
import Tabs from './hometabs';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timeout = setTimeout(() => {
          // Code to navigate to the home screen
          navigation.navigate("Tabs" as never)
        }, 4000); // Change 3000 to the desired amount of time in milliseconds
      
        return () => clearTimeout(timeout);
      }, []);
  
    return (
      <View style={styles.container}>
        {/* <Text>Hi!</Text> */}
        <Image source={require('../../assets/splashimg.png')} style={styles.image} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    //   resizeMode: 'contain',
    },
  });
  
export default Splash;  