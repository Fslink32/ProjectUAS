import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Stack, Box, Flex, Spacer, Wrap} from 'react-native-flex-layout';
import {Card, Input} from '@rneui/base';
import {Text, Icon, Image} from '@rneui/themed';
import {myStyles} from '../assets/style';

const ExploreScreen = () => {
  return (
    <ScrollView style={{marginBottom: 70, backgroundColor: '#6E8AEE'}}>
      <Stack style={style.container}>
        <Box
          style={{
            height: 250,
            width: '80%',
            borderRadius: 15,
            alignItems: 'center',
            backgroundColor: 'white',
            marginBottom: 20,
            marginTop: 20,
          }}>
          <Stack style={{width: '100%'}}>
            <Image
              source={require('../assets/img/img1.png')}
              style={{
                width: '100%',
                height: 190,
                resizeMode: 'cover',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            />
            <Text style={{textAlign: 'center', marginTop: 5, fontSize: 25}}>
              Pantai Tanjung Layar
            </Text>
          </Stack>
        </Box>
        <Box
          style={{
            height: Dimensions.get('window').height - 500,
            width: '80%',
            borderRadius: 15,
            alignItems: 'center',
            backgroundColor: 'white',
            marginBottom: 20,
            marginTop: 20,
          }}>
          <Text style={{textAlign: 'justify', margin: 20, fontSize: 25}}>
            Wisata Pantai Ciantir di Sawarna Lebak Banten adalah pantai berpasir
            putih bersih dengan bibir pantai yang cukup panjang. Pantai ini
            menjadi surga para peselancar. Wisata Pantai Ciantir yang berada di
            Desa Sawarna, Kecamatan Bayah, Kabupaten Lebak, Provinsi Banten
          </Text>
        </Box>
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

export default ExploreScreen;
