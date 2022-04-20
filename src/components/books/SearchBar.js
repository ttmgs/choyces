import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';



const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return(
        <View style={styles.container}>
       <Ionicons name="ios-search-circle-outline" size={40} color="black" />
          <TextInput 
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
          style={styles.input}
          placeholder="Search for a topic"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        height: 70,
        margin: 5,
        fontSize: 24
    }
})

export default SearchBar;