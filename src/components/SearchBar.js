import React from "react";
import { View, StyleSheet, TextInput } from "react-native";




const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return(
          <TextInput 
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
          style={styles.input}
          placeholder="Search"/>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 50,
        margin: 5,
        fontSize: 20
    }
})

export default SearchBar;