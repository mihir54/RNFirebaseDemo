import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
import OnboardScreen from '../screens/OnboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from '../screens/SignUpScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Stack = createNativeStackNavigator();

const AuthStack = () => {

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
    //     // <NavigationContainer>
    //       <AppStack.Navigator>
    //         <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
    //         <AppStack.Screen name="Login" component={LoginScreen} />
    //       </AppStack.Navigator>
    //     // </NavigationContainer>
    //   )
    // } else {
    //   return <LoginScreen />
    // }

    return (
        // <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Onboarding"
                component={OnboardScreen}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="Signup"
                component={SignUpScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor:'#f9fafd',
                        elevation: 0
                    },
                    headerLeft: () => (
                        <View>
                            <FontAwesome.Button
                                name='long-arrow-left'
                                backgroundColor='#f9fafd'
                                color='#333'
                                size={25}
                                onPress={() => navigation.navigate("Login")}
                            />
                        </View>
                    )
                })
                }
            />
        </Stack.Navigator>
        // </NavigationContainer>
    )

}

export default AuthStack;
