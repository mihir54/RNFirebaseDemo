import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import { AuthContext } from '../navigation/AuthProvider'

const LoginScreen = ({ navigation }) => {

    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {login} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>RN Firebase</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholder='Email'
                iconType='person-outline'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPasword) => setPassword(userPasword)}
                placeholder='Password'
                iconType='lock-closed-outline'
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Login"
                onPress={() => login(email,password) }
            />

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>
                    Don't have and account? Create here
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
})
