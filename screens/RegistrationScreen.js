import React, {useState} from 'react';
import {
  ScrollView
} from 'react-native';
import {userDataStore, userDataGet, userDataFind} from '../storage/userData';
import {Button, Text, Icon,Image} from '@rneui/themed';
import {Stack,Box} from 'react-native-flex-layout';
import {Card, Input} from '@rneui/base';
import {myStyles} from '../assets/style';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [IsNotValid, setNotValid] = useState('');

  const handleRegister = async () => {
    const validation = await userDataFind('users', username);
    console.log(validation);
    if (!username || !password || !email) {
      setNotValid(true);
    } else {
      console.log(validation.length);
      if (validation.length > 0) {
        setNotValid(true);
      } else {
        await userDataStore('users', {
          username: username,
          email: email,
          password: password,
        });
        navigation.navigate('Login');
      }
      // Perform registration logic here
      // You can save the username and password to a database or perform any other necessary operations
      // After registration, navigate to the login screen
    }
    // setNotValid(false);
  };

  return (
    <ScrollView>
      <Stack center style={myStyles.container}>
        <Card
          containerStyle={myStyles.cardContainer}
          style={{
            justifyContent: 'center',
            display: 'flex',
          }}>
          <Box style={myStyles.boxImage}>
            <Image
              source={require('../assets/icons/logo.png')}
              style={myStyles.image}
            />
          </Box>
          <Text h2 style={myStyles.title}>
            Registration
          </Text>
          <Stack row mt={5}>
            {IsNotValid && (
              <Text style={myStyles.invalidText}>Username Sudah Digunakan</Text>
            )}
          </Stack>
          <Input
            leftIcon={<Icon name="person" type="material" color="#517fa4" />}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            style={myStyles.input}
          />
          <Input
            leftIcon={<Icon name="email" type="material" color="#517fa4" />}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={myStyles.input}
          />
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
          <Stack row align="center" mt={10} spacing={4}>
            <Button
              radius={'xl'}
              style={myStyles.button}
              title="Register"
              onPress={handleRegister}
            />
          </Stack>
        </Card>
      </Stack>
    </ScrollView>
  );
};

export default RegisterScreen;
