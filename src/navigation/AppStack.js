import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}



export default AppStack
