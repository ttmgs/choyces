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
    image: {
        width: 150,
        height: 200,
        flexDirection: 'row'
    },
    frame: {
        flexWrap: 'nowrap',
        flexDirection: 'row',
        marginBottom: 5
    },
});


export default BookFrame;