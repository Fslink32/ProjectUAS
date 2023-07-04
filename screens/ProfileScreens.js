import React, {useEffect, useState} from 'react';
import {loginData,deleteData} from '../storage/userData';
import {
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Stack, Box, Flex, Spacer, Wrap} from 'react-native-flex-layout';
import {Card, Input} from '@rneui/base';
import {Text, Icon, Image} from '@rneui/themed';
import {myStyles} from '../assets/style';

const ProfileScreen = ({navigation}) => {
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const validation1 = await loginData('isLogIn', true);
        if (validation1[0].isLogIn === true) {
          setData(validation1[0].username);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleLogOut = async () => {
    await deleteData('isLogIn');
    navigation.navigate('Login');
  };
  return (
    <ScrollView style={{marginBottom: 70, backgroundColor: '#6E8AEE'}}>
      <Stack style={style.container}>
        <Box
          style={{
            height: 250,
            width: '80%',
            borderRadius: 15,
            alignItems: 'center',
            marginBottom: 20,
            marginTop: 20,
          }}>
          <Stack style={{width: '100%'}}>
            <Icon
              name="user-circle"
              type="font-awesome"
              color="black"
              size={200}
            />
            <Text style={{textAlign: 'center', marginTop: 5, fontSize: 25}}>
              {data}
            </Text>
          </Stack>
        </Box>
        <Box
          style={{
            height: 70,
            width: '80%',
            borderRadius: 15,
            backgroundColor: 'white',
            marginTop: 20,
            justifyContent: 'flex-start',
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="lock" type="material" color="#517fa4" size={30} />
          <Text
            style={{
              textAlign: 'left',
              fontSize: 25,
              marginLeft: 20,
            }}>
            Privasi
          </Text>
        </Box>
        <Box
          style={{
            height: 70,
            width: '80%',
            borderRadius: 15,
            backgroundColor: 'white',
            marginTop: 20,
            justifyContent: 'flex-start',
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="place" type="material" color="#517fa4" size={30} />
          <Text
            style={{
              textAlign: 'left',
              fontSize: 25,
              marginLeft: 20,
            }}>
            Riwayat
          </Text>
        </Box>
        <Box
          style={{
            height: 70,
            width: '80%',
            borderRadius: 15,
            backgroundColor: 'white',
            marginTop: 20,
            justifyContent: 'flex-start',
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="notifications"
            type="material"
            color="#517fa4"
            size={30}
          />
          <Text
            style={{
              textAlign: 'left',
              fontSize: 25,
              marginLeft: 20,
            }}>
            Notifikasi
          </Text>
        </Box>
        <Box
          style={{
            height: 70,
            width: '80%',
            borderRadius: 15,
            backgroundColor: 'white',
            marginTop: 20,
            justifyContent: 'flex-start',
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="settings" type="material" color="#517fa4" size={30} />
          <Text
            style={{
              textAlign: 'left',
              fontSize: 25,
              marginLeft: 20,
            }}>
            Setting
          </Text>
        </Box>
        <Box
          style={{
            height: 70,
            width: '80%',
            borderRadius: 15,
            backgroundColor: 'white',
            marginTop: 20,
            justifyContent: 'flex-start',
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="help" type="material" color="#517fa4" size={30} />
          <Text
            style={{
              textAlign: 'left',
              fontSize: 25,
              marginLeft: 20,
            }}>
            Bantuan
          </Text>
        </Box>
        <TouchableOpacity
          onPress={handleLogOut}
          style={{
            height: 50,
            width: '80%',
            borderRadius: 15,
            backgroundColor: 'red',
            marginTop: 20,
            justifyContent: 'center',
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="logout" type="material" color="white" size={30} />
          <Text
            style={{
              textAlign: 'left',
              fontSize: 25,
              marginLeft: 20,
              color: 'white',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </Stack>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#6E8AEE',
    alignItems: 'center',
  },
});

export default ProfileScreen;
