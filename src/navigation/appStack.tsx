import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from '../screens/hometabs';
import Splash from '../screens/splash';
import TakePicture from '../screens/takepicture';
import LoginScreen from '../screens/login';
import EditProfileScreen from '../screens/editProfile';
import HomeScreen from '../screens/feed';
import Profile from '../screens/profile';
import Recipe from '../screens/recipe';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View} from 'react-native';
import Explore from '../screens/explore';
import AddPostScreen from '../screens/post';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyHeader = ({navigation, route, options}: any) => {
  return (
    <View style={{
      padding: 8,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      }}>
      
      <Text style={{fontSize: 20}}>Recipe App</Text>
    
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

// const FeedStack = ({navigation}:any) => (
//     <Stack.Navigator screenOptions={{headerShown: false, headerStyle: {backgroundColor: '#21547a',}, headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}> 
//     <Stack.Screen name="Splash" component={Splash} />
//     <Stack.Screen name="Home" component={LoginScreen} /> 
//     <Stack.Screen name="Home" component={Home} />    
//     <Stack.Screen name="TakePicture" component={TakePicture} options = {{headerShown: true,  title: 'Snappy snap'}}  />
//     <Stack.Screen name="FootballDetail" component={Home} options = {{headerShown: true,  title: 'Match detail'}}  />
//     </Stack.Navigator>
// );
const ExploreStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Explore"
      component={Explore}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Recipe"
      component={Recipe}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);


const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="editProfile"
      component={EditProfileScreen}
      options={{
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="TakePicture"
      component={TakePicture}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
//   const getTabBarVisibility = (route: any) => {
//     const routeName = route.state
//       ? route.state.routes[route.state.index].name
//       : '';

//     if (routeName === 'Chat') {
//       return false;
//     }
//     return true;
//   };

  return (
    // <Stack.Navigator screenOptions={{headerShown: false, headerStyle: {backgroundColor: '#21547a',}, headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}> 
    // <Stack.Screen name="Splash" component={Splash} />
    // <Stack.Screen name="Login" component={LoginScreen} /> 
    // <Stack.Screen name="Tabs" component={Tabs} />  
    // <Stack.Screen name="Feed" component={HomeScreen} /> 
    // <Stack.Screen name="TakePicture" component={TakePicture} />
    // <Stack.Screen name="Recipe" component={Recipe} /> 
    // <Stack.Screen name="Profile" component={ProfileScreen} /> 
    // <Stack.Screen name="editProfile" component={EditProfileScreen} />  
    // </Stack.Navigator>
    //  <Tab.Navigator
    //  screenOptions={{
    //    header: (props: any) => {
    //      return <MyHeader {...props} />;
    //    },
    //  }}>
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
               color={tabInfo.focused ? '#006600' : '#8e8e93'}
             />
           );
         },
       }}
     />
     <Tab.Screen
       name="ExploreStack"
       component={ExploreStack}
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
               color={tabInfo.focused ? '#006600' : '#8e8e93'}
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
               color={tabInfo.focused ? '#006600' : '#8e8e93'}
             />
           );
         },
       }}
     />
       <Tab.Screen name="ProfileStack" component={ProfileStack}
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
  );
};

export default AppStack;