import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {SignIn, SplashScreen} from './pages';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <SignIn />
    </NavigationContainer>
  );
};

export default App;
