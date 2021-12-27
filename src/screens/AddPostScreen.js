import React, { useState } from 'react'
import { Image, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-crop-picker'

const AddPostScreen = () => {

    const [image, setImage] = useState(null)

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 1200,
            height: 780,
            cropping: true
        }).then((image) => {
            console.log(`ImageUrl: ${image}`);
            const imgUrl = Platform.OS == 'ios' ? image.sourceURL : image.path
            setImage(imgUrl)
        })
    }

    const takePhotoFromGallery = () => {
        ImagePicker.openPicker({
            width: 1200,
            height: 780,
            cropping: true
        }).then((image) => {
            console.log(`ImageUrl: ${image}`);
            const imgUrl = Platform.OS == 'ios' ? image.sourceURL : image.path
            setImage(imgUrl)
        })
    }


    return (
        <View style={styles.inputWrapper}>

            {
                image != null ? <Image
                    style={styles.imageView}
                    source={{ uri: image }} /> : null
            }

            <TextInput
                style={styles.inputField}
                placeholder='Write post!'
                multiline
                numberOfLines={4}
            ></TextInput>
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={takePhotoFromCamera}>
                    <Icon name="camera-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Choose Photo" onPress={takePhotoFromGallery}>
                    <Icon name="images-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>

            </ActionButton>
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
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    imageView: {
        width: '100%',
        height: 250,
        marginBottom: 15
    }
})
