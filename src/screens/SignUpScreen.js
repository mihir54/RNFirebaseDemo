import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import { AuthContext } from '../navigation/AuthProvider'

const SignUpScreen = ({ navigation }) => {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState()

    const { register } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign Up</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholder='Enter Email'
                iconType='person-outline'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
            />
          

            <FormInput
                labelValue={password}
                onChangeText={(userPasword) => setPassword(userPasword)}
                placeholder='Enter Password'
                iconType='lock-closed-outline'
                secureTextEntry={true}
            />

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(confirmPassword) => setPassword(confirmPassword)}
                placeholder='Confirm Password'
                iconType='lock-closed-outline'
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="SignUp"
                onPress={() => register(email, password)}
            />


        </View>
    )
}

export default SignUpScreen

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
