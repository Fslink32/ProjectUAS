import React, {
  useEffect,
  useState
} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { userDataStore,userDataGet,userDataFind,loginData } from '../storage/userData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNotValid, setValidation] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const validation1 = await loginData('isLogIn', true);
        if (validation1[0]) {
          setUsername(validation1.username)
          navigation.navigate('Home', {
            username
          });
        }
      } catch (error) {
      }
    };

    fetchData();
  }, []);
  // checkLogIn()
  const handleLogin = async() => {
    // await AsyncStorage.removeItem('users');
    const validation1 = await userDataFind('users',username);
    if(validation1[0]){
      if(validation1[0].password==password){
        navigation.navigate('Home', {username});
        await userDataStore('isLogIn', {
          username: username,
          isLogIn: true,
        });
      }else{
        setValidation(true);
      }
    }else{
      setValidation(true);
    }
    // Perform login logic here
    // You can validate the username and password, and perform authentication
    // If login is successful, navigate to the home screen
  };
  const Register = () => {
    // Perform login logic here
    // You can validate the username and password, and perform authentication
    // If login is successful, navigate to the home screen
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Text>{isNotValid ? "Username Salah" : ""}</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={Register} />
    </View>
  );
};

export default LoginScreen;
