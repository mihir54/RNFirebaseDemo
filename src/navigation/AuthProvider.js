import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e)
                    }
                },
                register: async (email, password) => {
                    try {
                        // console.log("email: ", email)
                        // console.log("password: ", password)
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log("Resister error============>: ",e)
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut()
                    } catch (e) {
                        console.log(e)
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
