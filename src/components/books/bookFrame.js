import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";



const BookFrame = ({ book }) => {
    return(
        <View style={styles.frame}>        
        <Image style={styles.image} source={{uri: book.volumeInfo.imageLinks.thumbnail}}    />
        </View>
    )
}

const styles = StyleSheet.create({
    frame: {
        alignItems: 'center',
        margin: 20
    },
    image: {
        width: 200,
        height: 250,
    },
});


export default BookFrame;