import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FormButton from '../components/FormButton';
import {useAppContext} from '../navigation/authProvider';

import firestore from '@react-native-firebase/firestore';
import PostCard from '../components/PostCard';

const ProfileScreen = ({navigation, route}:any) => {
  const {user, logout} = useAppContext();

  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  
  const getUser = async() => {
    await firestore()
    .collection('users')
    .doc( route.params ? route.params.userId : user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

  useEffect(() => {
    getUser();
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);

  const handleDelete = () => {};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.userImg}
          source={{uri: userData ? userData.userImg || 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
        />
        <Text style={styles.userName}>{userData ? userData.fname || 'Anonymous' : 'Anonymous'} {userData ? userData.lname || '' : ''}</Text>
        {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
        <Text style={styles.aboutUser}>
        {userData ? userData.about || 'No details added.' : ''}
        </Text>
        <View style={styles.userBtnWrapper}>
          {/* {route.params ? (
            <>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Follow</Text>
              </TouchableOpacity>
            </>
          ) : (
            <> */}
              <TouchableOpacity
                style={styles.userBtn}
                onPress={() => {
                  navigation.navigate('editProfile');
                }}>
                <Text style={styles.userBtnTxt}>Edit details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                <Text style={styles.userBtnTxt}>Logout</Text>
              </TouchableOpacity>
            {/* </>
          )} */}
        </View>

    
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
// import {useEffect, useState, useContext} from 'react';
// import {useAppContext} from '../navigation/authProvider';
// import { getAuth, updateEmail } from "firebase/auth";
// import {Alert, Button, Switch, Text, TextInput, View, TouchableOpacity} from 'react-native';
// import FormButton from '../components/FormButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// const Profile = () => {
//   const {user, logout} = useAppContext();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [inFinalYear, setInFinalYear] = useState(false);
// //   const auth = getAuth();

// //   const updateMail = () => {
// //   const currentUser = auth.currentUser;
// //   if (currentUser !== null) {
// //   updateEmail(currentUser , user.email).then(() => {
// //     console.log('Email updated');
// //     // ...
// //   }).catch((error) => {
// //     // An error occurred
// //     // ...
// //   });
// //   }
// // }

//   const showUSer =() => {
//     console.log(user)
//   }




//   return (
//     <View style={{padding: 16}}>
//         <TouchableOpacity onPress={()=>showUSer()}>
//       <Text style={{fontWeight: 'bold', fontSize: 20}}>
//         Value of User: 
//       </Text>
//       </TouchableOpacity>

//       {/* <TextInput
//         placeholder="Enter First Name"
//         value={firstName}
//         onChangeText={newText => setFirstName(newText)}
//       /> */}
//       <Text style={{fontWeight: 'bold'}} >
//       <Text style={{fontSize: 18}}>Email: </Text>
//       {/* <Text>{user.email}</Text> */}
     
//       </Text>
//       <TextInput
//         style ={{fontSize: 20}}
//         placeholder={user.email}
//         value={lastName}
//         onChangeText={newText => setLastName(newText)}
//       />
     
//       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//         {/* <Text>In Final Year</Text>
//         <Switch
//           value={inFinalYear}
//           onChange={() => setInFinalYear(!inFinalYear)}
//         /> */}
//       </View>
//       <Button title="Change Email"/>
//       <Button title="Change Password"/>
//       <Button title="Log Out" onPress={() => logout()} /> 
//       <Button color={'red'} title="Delete Account"/>
//     </View>
//   );
// };

// export default Profile;
