import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, DeviceEventEmitter} from 'react-native';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
// import {useNavigation} from '@react-navigation/native';

const Upload = ({navigation}:any) => {
  // const navigation = useNavigation();

  const [picture, setPicture] = useState<string | null>('');

  useEffect(() => {
    DeviceEventEmitter.addListener('event.pictureupdate', eventData =>
      updatePicture(eventData),
    );

    AsyncStorage.getItem('picture').then(pic => setPicture(pic));

    return () => {
      DeviceEventEmitter.removeAllListeners('event.pictureupdate');
    };
  }, []);

  const updatePicture = (newPicture: string) => {
    console.log({newPicture});

    if (newPicture) {
      setPicture(newPicture);
      AsyncStorage.setItem('picture', newPicture);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TakePicture');
        }}
        style={{padding: 16}}>
        {picture ? (
          <Image
            source={{uri: 'data:image/png;base64,' + picture}}
            resizeMode="contain"
            style={{height: 100, width: 100}}
          />
        ) : (
          <MatIcons name="account-circle" size={100} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Upload;
