import React, { useContext, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Image, FlatList, Alert } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PostCard from '../components/PostCard'
import { Posts } from '../utils/Post'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { windowWidth } from '../utils/Dimentions'
import { useDispatch, useSelector } from 'react-redux'
import { addFavPost } from '../redux/action/FavPostAction'

const HomeScreen = ({ navigation }) => {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [deletedPost, setDeletedPost] = useState(false)
    const dispatch = useDispatch()
    let list = useSelector(state => state.favPost_Reducer.favPostList)

    const fetchPost = async () => {
        try {
            // const list = []

            await firestore()
                .collection('Posts')
                .orderBy('postTime', 'desc')
                .get()
                .then((querySnapshot) => {
                    console.log('Total Post: ' + querySnapshot.size);
                    const listLocal = []
                    querySnapshot.forEach(doc => {
                        const { userId, post, postImg, postTime, likes, comments } = doc.data()
                        listLocal.push({
                            id: doc.id,
                            userId,
                            userName: 'Mihir',
                            userImg: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png',
                            postTime,
                            post,
                            postImg,
                            liked: false,
                            likes,
                            comments,
                        })
                    })
                    list = listLocal
                })
            setPost(list)
            if (loading) {
                setLoading(false)
            }
            console.log('List: ', list);
        } catch (error) {
            console.log('fetchPost: ', error);
        }
    }

    useEffect(() => {
        fetchPost()
    }, [])

    useEffect(() => {
        fetchPost()
        setDeletedPost(false)
    }, [deletedPost])

    const deletePost = (postId) => {
        firestore().collection('Posts')
            .doc(postId)
            .get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    const { postImg } = documentSnapshot.data()
                    if (postImg != null) {
                        const storageRef = storage().refFromURL(postImg)
                        const imgRef = storage().ref(storageRef.fullPath)

                        imgRef.delete()
                            .then(() => {
                                console.log(`${postImg} Image has bee successfully deleted !`);
                                deleteFireStorePost(postId)
                            })
                            .catch((e) => {
                                console.log('Error while delete image post: ', e);
                            })
                    } else {
                        deleteFireStorePost(postId)
                    }
                }
            })
    }

    const deleteFireStorePost = (postId) => {
        firestore().collection('Posts')
            .doc(postId).delete()
            .then(() => {
                Alert.alert(
                    'Post deleted!',
                    'Your post has been deleted from Firebase Cloud Storage!'
                );
                setDeletedPost(true)
            })
            .catch(e => console.log('Error while delete post: ', e))
    }

    const handleDeletePost = (postId) => {
        Alert.alert(
            'Delete Post',
            'Are you sure !!',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Clicked cancel'),
                    style: 'cancel'
                },
                {
                    text: 'Confirm',
                    onPress: () => deletePost(postId),
                }
            ],
            { cancelable: false }
        )
    }

    const handleLikePost = (likedPost) => {

        for (let i = 0; i < likedPost.length; i++) {
            if(likedPost.id === list[i].id){
                return;
            }
        }

        list.push(likedPost)
        console.log("handleLikePost:::::::::::: ", list);
        dispatch(addFavPost(list))
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={post}
                renderItem={({ item }) =>
                    <PostCard item={item} onDelete={handleDeletePost} onLike={(item) => handleLikePost(item)} isFromFavPost={false} />
                }
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
})
