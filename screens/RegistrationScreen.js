import React, {useState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import {userDataStore, userDataGet, userDataFind} from '../storage/userData'

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [IsNotValid, setNotValid] = useState('')

  const handleRegister = async () => {
    const validation = await userDataFind('users', username)
    if (!username|| !password|| !email) {
      setNotValid(true)
    } else {
      console.log(validation.length);
      if(validation.length > 0){
        setNotValid(true)
      }else{
        await userDataStore('users', {
          username: username,
          email: email,
          password: password,
        })
        navigation.navigate('Login')

      }
      // Perform registration logic here
      // You can save the username and password to a database or perform any other necessary operations
      // After registration, navigate to the login screen
    }
    // setNotValid(false);
  }

  return (
    <View>
      <Text>Registration Screen</Text>
      <Text>{IsNotValid ? 'Username Sudah Digunakan' : ''}</Text>
      <TextInput
        placeholder='Username'
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder='Password'
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title='Register' onPress={handleRegister} />
    </View>
  )
}

export default RegisterScreen
