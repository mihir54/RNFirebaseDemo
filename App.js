/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

import Providers from './src/navigation';


const AppStack = createNativeStackNavigator();

const App = () => {
  return (
    // <View style={styles.container}>
    //   <Text>Hellooo</Text>
    // </View>
    // <NavigationContainer>
      <Providers />
    // </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})
