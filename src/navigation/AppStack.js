import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProfileScreen from '../screens/ProfileScreen'
import MessageScreen from '../screens/MessageScreen'
import AddPostScreen from '../screens/AddPostScreen'
import ChatScreen from '../screens/ChatScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import FavoritePost from '../screens/FavoritePost'

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

// const AppStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//     )
// }


const FeedStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: "#2e64e5",
                    fontFamily: "Kufam-SemiboldItalic",
                    fontSize: 18
                },
                // headerStyle: {
                //     shadowColor: '#fff',
                //     elevation: 0
                // },
                headerRight: () => (
                    <View style={{ marginRight: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome
                            name='heart'
                            size={22}
                            color="#2e64e5"
                            style={{ padding: 10 }}
                            onPress={() => navigation.navigate('FavPost')}
                        />
                        <FontAwesome
                            name='plus'
                            size={22}
                            color="#2e64e5"
                            onPress={() => navigation.navigate('Post')}
                        />
                    </View>
                )
            }}
        />
        <Stack.Screen
            name='Post'
            component={AddPostScreen}
            options={{
                headerTitleAlign: 'center',
                // headerStyle: {
                //     backgroundColor:'#2e64e515',

                // }
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <View style={{ marginLeft: 15 }}>
                        <Ionicons
                            name="arrow-back"
                            size={25}
                            color="#2e64e5" />
                    </View>
                ),
            }}
        />

        <Stack.Screen
            name='FavPost'
            component={FavoritePost}
            options={{
                headerTitleAlign: 'center',
                // headerStyle: {
                //     backgroundColor:'#2e64e515',

                // }
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <View style={{ marginLeft: 15 }}>
                        <Ionicons
                            name="arrow-back"
                            size={25}
                            color="#2e64e5" />
                    </View>
                ),
            }}
        />

        <Stack.Screen
            name="HomeProfile"
            component={ProfileScreen}
            options={{
                title: '',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#fff',
                    shadowColor: '#fff',
                    elevation: 0,
                },
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <View style={{ marginLeft: 15 }}>
                        <Ionicons name="arrow-back" size={25} color="#2e64e5" />
                    </View>
                ),
            }}
        />
    </Stack.Navigator>
)


const ProfileStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name='Profile'
            component={ProfileScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{
                headerTitle: 'Edit Profile',
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#fff',
                    shadowColor: '#fff',
                    elevation: 0,
                },
            }}
        />
    </Stack.Navigator>
)

const MessageStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Message'
            component={MessageScreen}
        />
        <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({ route }) => ({
                title: route.params.userName,
                headerBackTitleVisible: false,
            })}
        />
    </Stack.Navigator>
)


const AppStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='FeedStack'
                component={FeedStack}
                options={() => ({
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name='home-outline'
                            color={color}
                            size={22}
                        />
                    )
                })}
            />

            <Tab.Screen
                name='MessageStack'
                component={MessageStack}
                options={() => ({
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='chatbubbles-outline'
                            color={color}
                            size={22} />
                    )
                })} />
            <Tab.Screen
                name='ProfileStack'
                component={ProfileStack}
                options={() => ({
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='person-outline'
                            color={color}
                            size={22} />
                    )
                })} />
        </Tab.Navigator>
    )
}

export default AppStack
