/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from './src/screens/auth/SplashScreen';
import SignUp from './src/screens/auth/SignUp';
import Button from './src/component/button';
import AuthHeader from './src/component/authheader';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <SignUp/>
       
    </SafeAreaView>
  );
}

export default App;
