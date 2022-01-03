import React, { useContext, useState } from 'react'
import { Alert, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-crop-picker'
import storage, { firebase } from '@react-native-firebase/storage'
import { ActivityIndicator } from 'react-native-paper'
import { AuthContext } from '../navigation/AuthProvider'
import firestore from '@react-native-firebase/firestore'

const AddPostScreen = () => {

    const { user } = useContext(AuthContext)
    const [image, setImage] = useState(null)
    const [uploading, setUploading] = useState(false)
    const [transferred, setTransferred] = useState(0);
    const [post, setPost] = useState(null)

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 1200,
            height: 780,
            cropping: true
        }).then((image) => {
            console.log(`ImageUrl: ${image}`);
            const imgUrl = Platform.OS == 'ios' ? image.sourceURL : image.path
            console.log(`setImage: ${imgUrl}`);
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

    const submitPost = async () => {
        const imageUrl = await uploadedImage()
        console.log(`imageUrl: ${imageUrl}`);

        firestore()
            .collection('Posts')
            .add({
                userId: user.uid,
                post: post,
                postImg: imageUrl,
                postTime: firestore.Timestamp.fromDate(new Date()),
                likes: null,
                comment: null
            })
            .then(() => {
                console.log('Post Added !');
                setImage(null)
                Alert.alert(
                    'Post uploaded!',
                    'Your post has been uploaded to Firebase Cloud Storage!'
                );
            })
            .catch((e) => {
                console.log('Something went wrong to added post on firestore, ' + e);
            })
    }

    const uploadedImage = async () => {
        if (image == null) {
            return null
        }
        const uploadUri = image
        console.log(`uploadUri: ${image}`);
        let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1)
        console.log(`fileName: ${fileName}`);

        const extention = fileName.split('.').pop()
        const name = fileName.split('.').slice(0, -1).join('.')
        fileName = name + Date.now() + '.' + extention

        setUploading(true)
        setTransferred(0)

        const storageRef = storage().ref(`photos/${fileName}`)
        const task = storageRef.putFile(uploadUri);

        task.on('state_changed', snapshot => {
            setTransferred(
                Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        });

        try {
            await task;
            const url = await storageRef.getDownloadURL()
            setUploading(false);
            setImage(null)
            return url
        } catch (e) {
            console.error(e);
            return null
        }
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
                value={post}
                onChangeText={(constent) => setPost(constent)}
            ></TextInput>

            {
                uploading ?
                    <View style={styles.stausWrapper}>
                        <Text>{transferred + '% Completed!'}</Text>
                        <ActivityIndicator size={'large'} color='#0000ff' />
                    </View>
                    :
                    <TouchableOpacity
                        style={styles.interactionActive}
                        onPress={submitPost}>
                        <Text style={styles.interactionTextActive}>Submit</Text>
                    </TouchableOpacity>
            }

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
    },
    interactionActive: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 15,
        backgroundColor: '#2e64e515'
    },
    interactionTextActive: {
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        color: "#2e64e5",
        marginTop: 1,
        marginLeft: 5
    },
    stausWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
