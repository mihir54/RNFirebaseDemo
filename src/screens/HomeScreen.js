import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PostCard from '../components/PostCard'
import { Posts } from '../utils/Post'

const HomeScreen = ({ navigation }) => {

    const { logout, user } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <FlatList
                data={Posts}
                renderItem={({ item }) =>
                    <PostCard item={item} />
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
