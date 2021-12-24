import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View,Image } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'

const HomeScreen = ({ navigation }) => {

    const { logout, user } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.userInfo}>
                    <Image                       
                        style={styles.userImage}
                        source={require("../assets/users/user-1.jpg")}
                    ></Image>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    card: {
        width: "100%",
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#f8f8f8'
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
})
