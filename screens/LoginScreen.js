import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // You can validate the username and password, and perform authentication
    // If login is successful, navigate to the home screen
    navigation.navigate('Home');
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
