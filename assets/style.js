import {Dimensions, StyleSheet} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const myStyles = StyleSheet.create({
  button: {
    borderRadius: 10,
  },
  input: {
    marginLeft: 15,
  },
  title: {
    color: '#000',
    marginBottom: 20,
    marginTop: 0,
    textAlign: 'center',
  },
  cardContainer: {
    borderRadius: 20,
    width: '60%',
  },
  container: {
    width: ScreenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: ScreenHeight,
    backgroundColor: '#6E8AEE',
  },
  invalidText: {
    color: 'red',
  },
  boxImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: '100%',
    marginBottom:20
  },
  image: {
    width: 100,
    height: '100%',
    borderRadius: 10,
  },
});

export {myStyles};
