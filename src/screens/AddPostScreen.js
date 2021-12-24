import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const AddPostScreen = () => {
    return (
        <View style={styles.inputWrapper}>
            <TextInput
                style={styles.inputField}
                placeholder='Write post!'
                multiline
                numberOfLines={4}
            ></TextInput>
        </View>
    )
}

export default AddPostScreen

const styles = StyleSheet.create({
    inputWrapper: {        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2e64e515'
    },
    inputField: {
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18
    }
})
