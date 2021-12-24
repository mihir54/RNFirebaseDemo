import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'

const ProfileScreen = ({navigation}) => {
    const {logout,user} = useContext(AuthContext)    

    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <Text>{user.email}</Text>
            <Button title='Logout' onPress={() => logout()}></Button>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})