import React, {
  useEffect,
  useState
} from 'react';
import { View, Text, Button } from 'react-native';
import {
  userDataStore,
  userDataGet,
  deleteData
} from '../storage/userData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation, route }) => {
  const { username } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('users');
        const parsedData = storedData ? JSON.parse(storedData) : [];
        console.log(parsedData)
        setData(parsedData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleAbout = () => {
    // Navigate to the about screen
    navigation.navigate('About');
  };

  const handleContact = () => {
    // Navigate to the contact screen
    navigation.navigate('Contact');
  };
  const handleLogOut = async() => {
    await deleteData('isLogIn');
    // Navigate to the contact screen
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      {data.map((item, index) => (
        <Text key={index}>{item.username}</Text>
      ))}
      <Button title="About" onPress={handleAbout} />
      <Button title="Contact" onPress={handleContact} />
      <Button title="Logout" onPress={handleLogOut} />
    </View>
  );
};

export default HomeScreen;
