import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";




const TriviaGameScreen = ({ navigation }) => {



    return(
        <View style={styles.container}>
            <Text>This is the Trivia Game </Text>

            <Button title="Each topic is random. Click to continue" onPress={() => {
              navigation.navigate("TriviaStart")
            }}/>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    }
})


export default withNavigation(TriviaGameScreen);