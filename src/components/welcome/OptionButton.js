import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";




const OptionButton = ({ title, style, navigation }) => {
    return(
        <TouchableOpacity
        style={style} 
        onPress={() => {
            navigation.navigate(title)
        }}>

            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
   title: {
       color: 'white',
       fontWeight: 'bold'
   }
})


export default withNavigation(OptionButton)

