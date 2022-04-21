import React from "react";
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
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

            {result.length > 1 ? <Text style={styles.topR}>We found {result.length} of the top results</Text> : null}

      <FlatList
      showsVerticalScrollIndicator={false}
      data={result}
      keyExtractor={(result) =>  result.id}
      ListFooterComponent={<View style={{height: 20}}/>}
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
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
       marginTop: 40,
    }
})


export default withNavigation(BooksScreen);