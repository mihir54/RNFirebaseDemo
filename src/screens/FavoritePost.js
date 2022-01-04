import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'



const FavoritePost = () => {
    const post = useSelector(state => state.favPost_Reducer.favPostList)
    console.log("post: ", post);

    return (
        <View style={styles.container}>
            <FlatList
                data={post}
                renderItem={({ item }) =>
                    <PostCard item={item} />
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
