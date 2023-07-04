import React, {useEffect, useState} from 'react';
import {View, Button, ScrollView, StyleSheet} from 'react-native';
import {Stack, Box, Flex, Spacer, Wrap} from 'react-native-flex-layout';
import {Card, Input} from '@rneui/base';
import {Text, Icon, Image} from '@rneui/themed';
import {userDataStore, userDataGet, deleteData} from '../storage/userData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation, route}) => {
  const [data, setData] = useState([]);

  return (
    <View>
      <ScrollView style={{marginBottom: 70, backgroundColor: '#6E8AEE'}}>
        <Stack style={style.container}>
          <Stack
            style={{
              backgroundColor: 'white',
              width: '90%',
              marginTop: 20,
              height: 60,
              borderRadius: 10,
            }}>
            <Input
              leftIcon={<Icon name="search" type="material" color="#517fa4" />}
              rightIcon={<Icon name="camera" type="material" color="#517fa4" />}
              placeholder="Search"
              onChangeText={text => setUsername(text)}
            />
          </Stack>
          <Stack
            style={{
              width: '90%',
              backgroundColor: 'white',
              marginTop: 20,
              borderRadius: 10,
              paddingBottom: 20,
              paddingTop: 20,
            }}>
            <Text h4 style={{textAlign: 'center'}}>
              Selamat datang di Lebak Unique
            </Text>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              Anda sekarang berada di
            </Text>
            <Text h4 style={{textAlign: 'center'}}>
              Rangkasbitung, Kab.Lebak, Banten
            </Text>
          </Stack>
          <Stack
            style={{
              width: '90%',
              marginTop: 20,
              height: 60,
              borderRadius: 10,
              color: 'white',
              paddingLeft: 20,
            }}>
            <Text h4 style={{color: 'white'}}>
              Rekomendasi tempat
            </Text>
          </Stack>
          <Wrap
            direction="row"
            justify="between"
            style={{
              width: '90%',
              color: 'white',
              marginBottom: 20,
            }}>
            <Box
              style={{
                paddingHorizontal: 10,
                height: 30,
                borderRadius: 5,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Text style={{fontSize: 20}}>semua</Text>
            </Box>
            <Box
              style={{
                paddingHorizontal: 10,
                height: 30,
                borderRadius: 5,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Text style={{fontSize: 20}}>Wisata</Text>
            </Box>
            <Box
              style={{
                paddingHorizontal: 10,
                height: 30,
                borderRadius: 5,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Text style={{fontSize: 20}}>Kuliner</Text>
            </Box>
            <Box
              style={{
                paddingHorizontal: 10,
                height: 30,
                borderRadius: 5,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Text style={{fontSize: 20}}>Sejarah</Text>
            </Box>
          </Wrap>
          <Wrap
            direction="row"
            justify="between"
            style={{
              width: '90%',
              color: 'white',
              marginTop: 30,
            }}>
            <Box
              style={{
                height: 140,
                width: '47%',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: 20,
              }}>
              <Stack style={{width: '100%'}}>
                <Image
                  source={require('../assets/img/img1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                  Pantai Tanjung Layar
                </Text>
              </Stack>
            </Box>
            <Box
              style={{
                height: 140,
                width: '47%',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: 20,
              }}>
              <Stack style={{width: '100%'}}>
                <Image
                  source={require('../assets/img/img1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                  Pantai Tanjung Layar
                </Text>
              </Stack>
            </Box>
            <Box
              style={{
                height: 140,
                width: '47%',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: 20,
              }}>
              <Stack style={{width: '100%'}}>
                <Image
                  source={require('../assets/img/img1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                  Pantai Tanjung Layar
                </Text>
              </Stack>
            </Box>
            <Box
              style={{
                height: 140,
                width: '47%',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: 20,
              }}>
              <Stack style={{width: '100%'}}>
                <Image
                  source={require('../assets/img/img1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                  Pantai Tanjung Layar
                </Text>
              </Stack>
            </Box>
            <Box
              style={{
                height: 140,
                width: '47%',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: 20,
              }}>
              <Stack style={{width: '100%'}}>
                <Image
                  source={require('../assets/img/img1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                  Pantai Tanjung Layar
                </Text>
              </Stack>
            </Box>
            <Box
              style={{
                height: 140,
                width: '47%',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: 20,
              }}>
              <Stack style={{width: '100%'}}>
                <Image
                  source={require('../assets/img/img1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                  Pantai Tanjung Layar
                </Text>
              </Stack>
            </Box>
            <Box
              style={{
                height: 140,
                width: '47%',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: 20,
              }}>
              <Stack style={{width: '100%'}}>
                <Image
                  source={require('../assets/img/img1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                  Pantai Tanjung Layar
                </Text>
              </Stack>
            </Box>
            <Box
              style={{
                height: 140,
                width: '47%',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: 20,
              }}>
              <Stack style={{width: '100%'}}>
                <Image
                  source={require('../assets/img/img1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                  Pantai Tanjung Layar
                </Text>
              </Stack>
            </Box>
            <Box
              style={{
                height: 140,
                width: '47%',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: 20,
              }}>
              <Stack style={{width: '100%'}}>
                <Image
                  source={require('../assets/img/img1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                  Pantai Tanjung Layar
                </Text>
              </Stack>
            </Box>
            <Box
              style={{
                height: 140,
                width: '47%',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: 20,
              }}>
              <Stack style={{width: '100%'}}>
                <Image
                  source={require('../assets/img/img1.png')}
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                  Pantai Tanjung Layar
                </Text>
              </Stack>
            </Box>
          </Wrap>
        </Stack>
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#6E8AEE',
    alignItems: 'center',
  },
});

export default HomeScreen;
