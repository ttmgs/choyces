import React from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";




const AboutChoycesScreen = ({ navigation: {goBack} }) => {

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.text}>At CHOYCES we aim to Creatively Help Our Youth Conquer Education & Success through remote tutoring for grades K-12, providing educational consultant services to educational institutions, and offering classes in the arts with guest artists like celebrity choreographer Fatima Yana and celebrity baker Kareem Youngblood from the CupKaakBar.

We are all about using children’s creative gifts to provide equitable and differentiated instruction to educate them. It is our goal to support children and all stakeholders in utilizing as many resources as necessary to ensure children conquer education and success, while being engaged in fun and creative activities that will support their learning and individual needs.

All children have the ability to learn. Educators must get to know each child and find creative ways to keep them interested, encouraged, and show them that we believe in them and support whatever path they choose to take in their careers, be it college or trade. Ghandi challenged us all to “be the change you want to see,” so that’s what we’re doing…changing the way we educate children! As Albert Einstein said, “Creativity is contagious, pass it on!”</Text>
            <Button style={styles.button} onPress={() => goBack()} title="Go back" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 20,
      marginVertical: 50
     },
     button: {
         width: 50,
         height: 50
     },
     text: {
         fontSize: 20,
         lineHeight: 40
     }
})

export default AboutChoycesScreen;