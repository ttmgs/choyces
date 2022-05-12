import React from "react";
import { StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';




const OptionButton = ({ title, style, navigation }) => {
    return(
        <Button 
        style={style} 
        type="solid"
        title={title} onPress={() => {
            navigation.navigate(title)
        }}>
        </Button>

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