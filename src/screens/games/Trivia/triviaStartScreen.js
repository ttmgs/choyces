import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import triviaGameAPI from "../../../api/games/Trivia/triviaGameAPI";
import TriviaResultShow from "./triviaResultShow";

const TriviaStartScreen = () => {
    const [result, getTriviaAPI] = triviaGameAPI();

    return(
        <View style={styles.container}>

            <Button title="Click to start or refresh a new quiz" onPress={() => {
                getTriviaAPI();
                styles.button
                console.log(result)
            }} />


            <FlatList 
            data={result}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return(
                    <TriviaResultShow result={item}/>
                )
            }}
            />
        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    button: {
        display: "none"
    }
})

export default TriviaStartScreen;