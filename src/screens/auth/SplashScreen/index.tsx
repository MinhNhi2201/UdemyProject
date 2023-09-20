import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Button from '../../../component/button';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import {UserContext} from '../../../../App';

const SplashScreen = ({navigation}) => {


  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/img/splash.png')}
        resizeMode="contain"
        style={styles.img}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}> You'll Find</Text>
        <Text style={[styles.innerTitle, styles.title]}>All you need</Text>
        <Text style={styles.title}> You'll Find Here</Text>
      </View>
      <Button title="Sign in" onPress={() => navigation.navigate('SignIn')} />
      <Pressable hitSlop={20} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.footerText}>Sign up</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginVertical: 34,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerTitle: {
    color: '#FCA34D',
    fontSize: 40,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: '#4F63AC',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
export default React.memo(SplashScreen);
