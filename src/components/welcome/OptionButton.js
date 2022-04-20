import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";




const OptionButton = ({ title, style, navigation }) => {
    return(
        <TouchableOpacity style={style} onPress={() => {
            navigation.navigate(title)
        }}>
        <Text style={styles.text} adjustsFontSizeToFit={true}>{title}</Text>

        </TouchableOpacity>

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


export default withNavigation(OptionButton)