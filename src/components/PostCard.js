import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PostScreen = ({ item }) => {

    let likeText,commentText

    if(item.likes == 1){
        likeText = '1 Like'
    }else if(item.likes > 1){
        likeText = `${item.likes} Likes`
    }else {
        likeText = 'Like'
    }

    if(item.comments == 1){
        commentText = '1 Comment'
    }else if(item.comments > 1){
        commentText = `${item.comments} Comments`
    }else {
        commentText = 'Comment'
    }

    return (
        <View style={styles.card}>
            <View style={styles.userInfo}>
                <Image
                    style={styles.userImage}
                    source={item.userImg}
                />
                <View style={styles.userInfoView}>
                    <Text style={styles.userName}>{item.userName}</Text>
                    <Text style={styles.postTime}>{item.postTime}</Text>
                </View>


            </View>
            <View>
                <Text style={styles.postText}>{item.post}</Text>
            </View>
            {
                item.postImg != 'none' ?
                    <Image
                        style={styles.postImage}
                        source={item.postImg}
                    /> : <View style={styles.devider} />
            }

            <View style={styles.interactionWrapper}>
                {
                    item.liked == true ?
                        <TouchableOpacity style={styles.interactionActive}>
                            <Ionicons
                                name="heart"
                                size={20}
                                color='#2e64e5'
                            />
                            <Text style={styles.interactionTextActive}>{likeText}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.interactionInactive}>
                            <Ionicons
                                name="heart-outline"
                                size={20}                                
                                color='#333'
                            />
                            <Text style={styles.interactionTextInActive}>{likeText}</Text>
                        </TouchableOpacity>
                }

                <View style={styles.interaction}>
                    <Ionicons
                        name="chatbubble-outline"
                        size={20}
                        color='#333'
                    />
                    <Text style={styles.interactionText}>{commentText}</Text>
                </View>
            </View>
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    card: {
        width: '100%',
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
        padding: 10
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingStart: 10,
        paddingEnd: 10

    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userInfoView: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10
    },
    userName: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        color: "black"
    },
    postTime: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: "#808080",
    },
    postText: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: "black",
        marginStart: 15,
        marginEnd: 15,
        marginBottom: 10
    },
    postImage: {
        width: '100%',
        height: 250,
    },
    interactionWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    interaction: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 1,
       
    },
    interactionActive: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 1,
        backgroundColor: '#2e64e515'
    },
    interactionInactive: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 1,
        backgroundColor: 'transparent'
        
    },
    interactionTextInActive: {
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        color: "#333",
        marginTop: 1,
        marginLeft: 5
    },
    interactionTextActive: {
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        color: "#2e64e5",
        marginTop: 1,
        marginLeft: 5
    },
    interactionText: {
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        color: "#333",
        marginTop: 1,
        marginLeft: 5
    },
    devider: {
        borderColor: '#dddddd',
        borderWidth: 0.5,
        width: '90%',
        alignSelf: 'center'
    }
})
