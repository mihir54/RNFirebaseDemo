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
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import NavigationProviders from './src/navigation';
import reduxStore from './src/redux/store';


const { store, persistore } = reduxStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <NavigationProviders />
      </PersistGate>
    </Provider>
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
