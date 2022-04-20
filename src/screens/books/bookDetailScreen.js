import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";


const BookDetailScreen = ({ navigation }) => {
    
  


    const [result, setResults] = useState([]);
    const id = navigation.getParam("id");
    const url = "https://www.googleapis.com/books/v1/volumes/" + id



    const getAPI = () => {
        try {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setResults(data.volumeInfo)
            })
        } catch {
            setErrMessage("Something went wrong")
        }
    }


    useEffect(() => {
        getAPI()
    }, [])



    // error message
    if (!result) {
        return null
    }



    
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
     
                {console.log(result)}

                <View style={styles.infoBox}>

                <Text style={styles.text}>Title:</Text>
                <Text style={styles.title}> {result.title}</Text>

                <Text>{'\n'}</Text> 
                <Text>{'\n'}</Text> 

                <Text style={styles.text}>Author:</Text>
                <Text style={styles.subTitle}>{result.authors}</Text>
                <Text style={styles.text}>Category:</Text>
                <Text style={styles.subTitle}>{result.categories}</Text>





               <Text>{'\n'}</Text> 
               <Text>{'\n'}</Text> 


                <Text style={styles.text}> {result.description}</Text>
                </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
     marginTop: 50,
     margin: 5,
    },
    title: {
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold'
    },
    subTitle: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold'
    },
    image: {
      height: 200,
      width: 120
    },
    infoBox: {
     margin: 5,
     fontSize: 18,
     fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    moreInfo: {
        color: 'blue'
    }
})

export default BookDetailScreen;





















































// import React, {useState, useEffect} from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";
// import xtype from 'xtypejs';
// import bookAxios from "../api/bookAxios";

// const BookDetailScreen = ({ navigation }) => {
    
  

//     // const url = "https://www.googleapis.com/books/v1/volumes/" + id

//     const [result, setResult] = useState([]);

//     //  grabbing id from navigation object
//     const id = navigation.getParam("id");

//     useEffect(() => {
//     const getData = async (id) => {
//         const response = await bookAxios.get(`${id}`);
//        setResult(response.data)
//     };
//         getData(id)
//     }, [])


//     // error message
//     if (!result) {
//         return null
//     }



    
//     return(
//         <View style={styles.container}>
//              {console.log(result)}

//          <FlatList
//          data={result}
//          keyExtractor={(result) => result.id}
//          renderItem={({ item }) => {
//              return(
//                  <Text>Description: {result.volumeInfo.descritpion}</Text>
//               )
//          }}
//          /> 

//         </View>

//     )
// }

// const styles = StyleSheet.create({
//     container: {
//      marginTop: 50,
//      margin: 5
//     },
//     text: {
//         fontSize: 18
//     }
// })

// export default BookDetailScreen;


