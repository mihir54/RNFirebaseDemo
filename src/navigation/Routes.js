import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import HomeScreen from '../screens/HomeScreen'

const Routes = () => {

    const { user, setUser } = useContext(AuthContext)
    const [intializing, setIntializing] = useState(true)

    const onAuthStateChanged = (user) => {
        setUser(user)
        if (intializing) setIntializing(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber
    }, [])

    if (intializing) return null

    return (
        <NavigationContainer>
            {/* <AuthStack /> */}
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Routes
