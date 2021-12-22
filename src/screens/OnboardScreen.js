import React from 'react'
import { Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardScreen = ({ navigation }) => {
    return (
        <Onboarding
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.replace("Login")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require("../assets/img1.png")} />,
                    title: 'Onboarding 1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/img2.png')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/img3.png')} />,
                    title: 'Onboarding 3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    )
}


export default OnboardScreen
