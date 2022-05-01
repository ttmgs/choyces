import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";


const GameFrame = ({ navigation, title, style }) => {
    return(
        <View>
         <TouchableOpacity style={style} onPress={() => {
             navigation.navigate(title)
         }}>     
        <Text style={styles.text} adjustsFontSizeToFit={true}>{title}</Text>
         </TouchableOpacity>
         </View>
    )
}



const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})



export default withNavigation(GameFrame);