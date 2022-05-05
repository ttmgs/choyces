import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";




const TriviaGameScreen = ({ navigation }) => {



    return(
        <View style={styles.container}>


            <Button title="Each topic is random. Click to continue" onPress={() => {
              navigation.navigate("TriviaStart")
            }}/>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'    }
})


export default withNavigation(TriviaGameScreen);