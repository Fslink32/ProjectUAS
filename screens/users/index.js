import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {Icon} from '@rneui/themed';

// Import your screen components
import HomeScreen from '../HomeScreens';
import ExploreScreen from '../ExploreScreen';
import ContactScreen from '../ProfileScreens';

const Tab = createBottomTabNavigator();
const UserScreen = ({route}) => {
  console.log(route.params);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute', height: 70},
        tabBarLabelStyle: {fontSize: 15, marginBottom: 5},
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          initialParams: {userId: '123'},
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          initialParams: {username: route.params},
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={35} />
          ), // Example: passing userId as a parameter
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Profile',
          initialParams: {userId: '123'},
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserScreen;
