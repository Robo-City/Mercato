import React from 'react';
import {View, Text, Button, Image,TouchableOpacity, } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}
const Skip = ({...props}) => (
    <Button
    title='Skip'
    color="#000000"
    {...props}
    />
);
const Next = ({...props}) => (
    <Button
    title='Next'
    color="#000000"
    {...props}
    />
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);
const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#BEF264',
                    image: <Image source={require('.../assets/images/onboarding-img1.png')} />,
                    title: 'Connect to the World',
                    subtitle: 'A New Way To Connect With The World',
                },
                {
                    backgroundColor: '#FB923C',
                    image: <Image source={require('.../assets/images/onboarding-img2.png')} />,
                    title: 'Shop Online',
                    subtitle: 'Dont stress yourself relax and enjoy shoping at the comfort of your homes',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('.../assets/images/onboarding-img3.png')} />,
                    title: 'The Market World brought To your Doorstep',
                    subtitle: "Let The Spot Light Capture You",
                },
            ]} />
    );
};
