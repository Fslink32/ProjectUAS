import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// Import your screen components
import HomeScreen from '../HomeScreens';
import AboutScreen from '../AboutScreen';
import ContactScreen from '../ContactScreen';
import CameraScreen from './CameraScreen';

const Tab = createBottomTabNavigator();

const UserScreen = ({route}) => {
  console.log(route.params);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          initialParams: {username: route.params},
          headerShown: false,
          tabBarIcon: ({color, size}) => (
              <Image
                source={require('../../assets/icons/home.png')}
                style={{width: size, height: size, tintColor: color}}
              />
          ), // Example: passing userId as a parameter
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          initialParams: {userId: '123'},
          headerShown: false,
          tabBarIcon: ({color, size}) => (
              <Image
                source={require('../../assets/icons/book.png')}
                style={{width: size, height: size, tintColor: color}}
              />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact',
          initialParams: {userId: '123'},
          headerShown: false,
          tabBarIcon: ({color, size}) => (
              <Image
                source={require('../../assets/icons/people.png')}
                style={{width: size, height: size, tintColor: color}}
              />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: 'Camera',
          initialParams: {userId: '123'},
          headerShown: false,
          tabBarIcon: ({color, size}) => (
              <Image
                source={require('../../assets/icons/people.png')}
                style={{width: size, height: size, tintColor: color}}
              />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserScreen;
