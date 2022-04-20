import React from "react";
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity, ScrollView } from "react-native";
import SearchBar from "../../components/books/SearchBar";
import bookAPI from "../../api/books/bookAPI";
import BookFrame from "../../components/books/bookFrame";
import { withNavigation } from "react-navigation";

const BooksScreen = ({ navigation }) => {

    const [term, result, setTerm, errMessage, getAPI] = bookAPI();

    return(
        <View style={styles.container}>
            <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={getAPI}
            />
            {errMessage ? <Text>{errMessage}</Text> : null}


<ScrollView>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={result}
      keyExtractor={(result) =>  result.id}
      renderItem={({ item }) => {
          return(
              <TouchableOpacity onPress={() => {
                  navigation.navigate("BookDetail", {id: item.id})
              }}>
        <BookFrame book={item}/>
        </TouchableOpacity>
          )
      }}
      />
                  {/* <Button onPress={() => goBack()} title="Go back" /> */}
        </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
       marginTop: 40
    }
})


export default withNavigation(BooksScreen);