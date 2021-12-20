/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {  Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AppStack = createNativeStackNavigator();

const App = () => {

  // const [isFirtlaunch, setIsFirtlaunch] = useState(null)

  // useEffect(() => {
  //   AsyncStorage.getItem("alreadyLaunch").then(value => {
  //     if (value == nul) {
  //       AsyncStorage.setItem("alreadyLaunch", true)
  //       setIsFirtlaunch(true)
  //     } else {
  //       setIsFirtlaunch(false)
  //     }
  //   })
  // }, [])

  // if (isFirtlaunch == null) {
  //   return null;
  // } else if (isFirtlaunch == true) {
  //   return (
  //     <NavigationContainer>
  //       <AppStack.Navigator>
  //         <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
  //         <AppStack.Screen name="Login" component={LoginScreen} />
  //       </AppStack.Navigator>
  //     </NavigationContainer>
  //   )
  // } else {
  //   return <LoginScreen />
  // }

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  )

}

export default App;
