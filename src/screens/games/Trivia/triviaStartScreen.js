import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import triviaGameAPI from "../../../api/games/Trivia/triviaGameAPI";
import TriviaResultShow from "./triviaResultShow";
import { withNavigation } from "react-navigation";

const TriviaStartScreen = ({ navigation }) => {
    const [result, getTriviaAPI, loadingIcon] = triviaGameAPI();

    return(
        <View style={styles.container}>


            <Button 
            title="Click to start or refresh a new quiz"
            style={styles.button}
             onPress={() => {
                getTriviaAPI();
            }} />


            <Button 
            title="Home" 
            style={styles.button}
            onPress={() => {
                navigation.navigate("Home")
            }}
            />

          {result.length > 1 && result.length < 5 ? loadingIcon : null}
          
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
        backgroundColor: 'black',
        overflow: 'hidden'
     }
})

export default withNavigation(TriviaStartScreen);