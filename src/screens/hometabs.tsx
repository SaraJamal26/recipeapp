import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View} from 'react-native';
import Splash from './splash';
import Explore from './explore';
import Upload from './upload';
import Profile from './profile';
import AddPostScreen from './post';
import FormButton from '../components/FormButton';
import { AuthContext, useAppContext } from '../navigation/authProvider';
import HomeScreen from './feed';

const Tab = createBottomTabNavigator();

const MyHeader = ({navigation, route, options}: any) => {
  return (
    <View style={{
      padding: 8,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      }}>
      
      <Text style={{fontSize: 20}}>LearnEvery </Text>
    
    <View
      style={{
        // padding: 8,
        // flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: '65%'
        
      }}>
   
      {/* <MatIcons name="menu" size={24} /> */}
    </View>
    </View>
  );
};

const Tabs = () => {
  const {user, logout} = useAppContext();
  return (
    // <View>
      /* <FormButton buttonTitle="LogOut" onPress={()=>logout()}></FormButton> */

    
       <Tab.Navigator
      screenOptions={{
        header: (props: any) => {
          return <MyHeader {...props} />;
        },
      }}>
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 14, fontWeight: focused ? 'bold' : 'normal', color: '#21547a' }}>
              Home
            </Text>
          ),
          tabBarIcon: tabInfo => {
            return (
              <MatIcons
                name="home"
                size={24}
                color={tabInfo.focused ? '#21547a' : 'black'} 
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 14, fontWeight: focused ? 'bold' : 'normal', color: '#21547a' }}>
              Explore
            </Text>
          ),
          tabBarIcon: tabInfo => {
            return (
              <MatIcons
                name="search"
                size={24}
                color={tabInfo.focused ? '#21547a' : 'black'} 
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Upload"
        component={AddPostScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 14, fontWeight: focused ? 'bold' : 'normal', color: '#21547a' }}>
              Upload
            </Text>
          ),
          tabBarIcon: tabInfo => {
            return (
              <MatIcons
                name="add-box"
                size={24}
                color= {tabInfo.focused ? '#21547a' : 'black'} 
                // {tabInfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
        <Tab.Screen name="Profile" component={Profile}
        options = {{title: 'Profile',
          tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 14, fontWeight: focused ? 'bold' : 'normal', color: '#21547a' }}>
                Profile
              </Text>
            ), 
            tabBarIcon: tabInfo => {  // takes a function that returns stuff to render
            return (
              <MatIcons
              name = "account-circle"
              size = {24}
              color = {tabInfo.focused ? '#21547a' : 'black'} 
              />
            )
          }}
        } /> 

    
       </Tab.Navigator>
      //  </View>
    
  );
}

export default Tabs;
