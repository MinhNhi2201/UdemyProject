/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SplashScreen from './src/screens/auth/SplashScreen';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import MyListings from './src/screens/app/MyListings';

const myTheme = {
  colors: {
    background: 'white',
  },
};
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateListing"
        component={CreateListing}
        options={{headerShown: false}}
      />
           <Stack.Screen
        name="MyListings"
        component={MyListings}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Tabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let icon;
        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/img/home_active.png')
            : require('./src/assets/img/home.png');
        } else if (route.name === 'ProfileStack') {
          icon = focused
            ? require('./src/assets/img/profile_active.png')
            : require('./src/assets/img/profile.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/img/bookmark_active.png')
            : require('./src/assets/img/bookmark.png');
        }

        return <Image style={{width: 27, height: 27}} source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: '#C5C5C5', backgroundColor: '#FFFFFF'},
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
);
function App(): JSX.Element {
  const isSignedIn = true;
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
