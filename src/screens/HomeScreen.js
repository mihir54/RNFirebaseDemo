import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'

const HomeScreen = ({navigation}) => {

    const {logout} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text>Home screens</Text>
            <Button title='Logout' onPress={() => logout()}></Button>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
