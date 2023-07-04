import React, {useEffect, useState} from 'react';
import {
  ScrollView,
} from 'react-native';
import {
  userDataStore,
  userDataFind,
  loginData,
  userDataGet,
} from '../storage/userData';
import {Button, Text, Icon, Image} from '@rneui/themed';
import {Card, Input} from '@rneui/base';
import {Stack, Box} from 'react-native-flex-layout';
import {myStyles} from '../assets/style';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNotValid, setValidation] = useState(false); // Set initial value to false

  useEffect(() => {
    const fetchData = async () => {
      try {
        const validation1 = await loginData('isLogIn', true);
        if (validation1[0].isLogIn === true) {
          setUsername(validation1[0].username);
          navigation.navigate('User', {
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

  return (
    <ScrollView>
      <Stack center style={myStyles.container}>
        <Card containerStyle={myStyles.cardContainer}>
          <Box style={myStyles.boxImage}>
            <Image
              source={require('../assets/icons/logo.png')}
              style={myStyles.image}
            />
          </Box>
          <Text h2 style={myStyles.title}>
            Login
          </Text>
          <Input
            leftIcon={<Icon name="person" type="material" color="#517fa4" />}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            style={myStyles.input}
          />
          <Stack row mt={5}>
            {isNotValid && (
              <Text style={myStyles.invalidText}>Username Salah</Text>
            )}
          </Stack>
          <Input
            leftIcon={
              <Icon name="visibility" type="material" color="#517fa4" />
            }
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            style={myStyles.input}
          />
          <Stack row align="center" mt={15} spacing={4}>
            <Button
              radius={'xl'}
              style={myStyles.button}
              title="Login"
              onPress={handleLogin}
            />
          </Stack>
          <Stack mt={15} spacing={4}>
            <Text style={{textAlign: 'center'}}>
              don't have an account?{'  '}
              <Text
                style={{textDecorationLine: 'underline', color: 'blue'}}
                onPress={Register}>
                SignUp
              </Text>
            </Text>
          </Stack>
        </Card>
      </Stack>
    </ScrollView>
  );
};

export default LoginScreen;
