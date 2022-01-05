import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import { deletePost } from '../redux/action/FavPostAction'


const FavoritePost = () => {
    const post = useSelector(state => state.favPost_Reducer.favPostList)
    console.log("post: ", post);

    const dispatch = useDispatch()

    const deleteFavPost = (dletePostId) => {
        dispatch(deletePost(dletePostId))
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={post}
                renderItem={({ item }) =>
                    <PostCard item={item} onDelete = {deleteFavPost} isFromFavPost={true}/>
                }
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false} />
        </View>
    )
}

export default FavoritePost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
})
