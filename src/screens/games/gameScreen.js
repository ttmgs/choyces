import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";




const GameScreen = ({ navigation: {goBack} }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>This is the games screen</Text>
            <Button style={styles.button} onPress={() => goBack()} title="Go back" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 20,
      marginVertical: 100
     },

})

export default GameScreen;