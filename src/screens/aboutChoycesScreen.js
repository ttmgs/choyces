import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";




const AboutChoycesScreen = ({ navigation: {goBack} }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>At CHOYCES we aim to Creatively Help Our Youth Conquer Education & Success through remote tutoring for grades K-12, providing educational consultant services to educational institutions, and offering classes in the arts with guest artists like celebrity choreographer Fatima Yana and celebrity baker Kareem Youngblood from the CupKaakBar.</Text>
            <Button style={styles.button} onPress={() => goBack()} title="Go back" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 20,
      marginVertical: 100
     },
     button: {
         width: 50,
         height: 50
     },
     text: {
         fontSize: 20,
         lineHeight: 20
     }
})

export default AboutChoycesScreen;