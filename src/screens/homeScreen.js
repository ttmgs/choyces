import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import WelcomeScreen from "../components/welcome/welcomeScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import OptionButton from '../components/welcome/OptionButton';
import { FontAwesome } from '@expo/vector-icons'; 



export default function App() {
    const [loading, setLoading] = useState(true);
    const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(true);

    // AsyncStorage if this already loaded or not
    // if yes render the actual app
    // if not then we are going display this welcome screen.

    const checkForFirstTimeLoaded = async() => {
        const result = await AsyncStorage.getItem('isFirstTimeOpen');
        if (result === null) setIsFirstTimeLoad(true);
        setLoading(false);
    };

    useEffect(() => {
        checkForFirstTimeLoaded();
    }, []);

    const slides = [{
            key: 1,
            // title: 'Welcome to the Choyces App',
            desc: 'Creatively Helping Our Youth Conquer Education & Success',
            backgroundColor: 'red',
        },
        {
            key: 2,
            // title: 'Play fun games',
            desc: '“Creativity is contagious, pass it on!” – Albert Einstein',
            backgroundColor: 'blue',
        },
        {
            key: 3,
            // title: 'Find all your favourite books',
            desc: 'Online Tutoring & Educational Consulting',
            backgroundColor: 'green',
        },
    ];


    const handleDone = () => {
        setIsFirstTimeLoad(false);
        AsyncStorage.setItem('isFirstTimeOpen', 'no');
    };

    if (loading) return null;

    if (isFirstTimeLoad)
        return ( 
            <>
            <StatusBar hidden />
            <WelcomeScreen onDone = { handleDone }
            slides = { slides }/> 
            </>
        );

    if (!isFirstTimeLoad)


        return ( 

        <View style = { styles.container } >
        <OptionButton style = {styles.gameBtn} title = "Games" />
        <FontAwesome style={styles.capIcon} name="graduation-cap" size={50} color="black" />
        <OptionButton style = {styles.booksBtn} title = "Books" />
        <OptionButton style = {styles.videosBtn} title = "Videos" />
        <OptionButton style = {styles.aboutBtn} title = "About" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    gameBtn: {
        width: 200,
        height: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    booksBtn: {
        width: 200,
        height: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    }, 
    aboutBtn: {
        width: 200,
        height: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    videosBtn: {
        width: 200,
        height: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    capIcon: {
        position: 'absolute',
        marginTop: 200
    }
});