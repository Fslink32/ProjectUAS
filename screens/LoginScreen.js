import React, {useEffect, useState} from 'react';
import {View, TextInput, Dimensions, StyleSheet} from 'react-native';
import {
  userDataStore,
  userDataFind,
  loginData,
  userDataGet,
} from '../storage/userData';
import {Button, Text} from '@rneui/themed';
import {Stack} from 'react-native-flex-layout'; // Import Stack from 'react-native-flex-layout'

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNotValid, setValidation] = useState(false); // Set initial value to false

  useEffect(() => {
    const fetchData = async () => {
      try {
        const validation1 = await loginData('isLogIn', true);
        if (validation1.isLogIn === true) {
          setUsername(validation1.username);
          navigation.navigate('Home', {
            username,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = async () => {
    const validation1 = await userDataFind('users', username);
    console.log(username);
    if (validation1[0] && validation1[0].password == password) {
      console.log(validation1[0]);
      navigation.navigate('User', {
        username,
      });
      await userDataStore('isLogIn', {
        username: username,
        isLogIn: true,
      });
      setValidation(false);
    } else {
      setValidation(true);
    }
  };

  const Register = () => {
    navigation.navigate('Register');
  };

  const styles = StyleSheet.create({
    button: {
      borderRadius: 10,
    },
    input: {
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 1,
      width: '50%',
      justifyContent: 'center',
      borderRadius: 10,
      textAlign:'center',
      marginVertical:5
    },
    title:{
      color:"#000"
    }
  });

  return (
    <Stack
      center
      style={{
        width: ScreenWidth,
        justifyContent: 'center',
        display: 'flex',
        height: ScreenHeight,
      }}>
      <Text h2 style={styles.title}> Login Screen </Text>{' '}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />{' '}
      <Stack row mt={5}>
        {' '}
        {isNotValid && (
          <Text
            style={{
              color: 'red',
            }}>
            Username Salah{' '}
          </Text>
        )}{' '}
      </Stack>{' '}
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />{' '}
      <Stack row w={'50%'} align="center" mt={15} spacing={4}>
        <Button
          radius={'xl'}
          style={styles.button}
          title="Login"
          onPress={handleLogin}
        />{' '}
      </Stack>{' '}
      <Stack row w={'50%'} align="center" mt={10} spacing={4}>
        <Button
          radius={'xl'}
          style={styles.button}
          title="SignUp"
          onPress={Register}
        />{' '}
      </Stack>{' '}
    </Stack>
  );
};

export default LoginScreen;
