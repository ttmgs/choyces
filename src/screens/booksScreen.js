import React from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import bookAPI from "../api/bookAPI";
import BookFrame from "../components/bookFrame";


const BooksScreen = ({ navigation: {goBack} }) => {

    const [term, result, setTerm, errMessage, getAPI] = bookAPI();

    return(
        <View style={styles.container}>
            <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={getAPI}
            />
            {errMessage ? <Text>{errMessage}</Text> : null}



<View style={styles.bookContainer}>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={result}
      keyExtractor={(result) =>  result.id}
      renderItem={({ item }) => {
          return(
        <BookFrame book={item}/>

          )
      }}
      />
                  <Button style={styles.button} onPress={() => goBack()} title="Go back" />
</View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10
    }
})

export default BooksScreen;