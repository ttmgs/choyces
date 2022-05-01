import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import GameFrame from "../../components/games/gameFrame";
import { withNavigation } from "react-navigation";


const GameScreen = () => {

    return(
        <View style={styles.container}>

        <GameFrame style={styles.memoryBtn} title="Trivia"/>
        <GameFrame style={styles.memoryBtn} title="Blocks"/>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
     },
     memoryBtn: {
        width: 200,
        height: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
     }

})

export default GameScreen;