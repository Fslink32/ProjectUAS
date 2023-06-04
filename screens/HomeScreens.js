import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleAbout = () => {
    // Navigate to the about screen
    navigation.navigate('About');
  };

  const handleContact = () => {
    // Navigate to the contact screen
    navigation.navigate('Contact');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="About" onPress={handleAbout} />
      <Button title="Contact" onPress={handleContact} />
    </View>
  );
};

export default HomeScreen;
