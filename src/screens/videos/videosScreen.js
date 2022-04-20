import React from "react";
import { View, StyleSheet, Text} from "react-native";
import SearchBar from "../../components/videos/SearchBar";
import videoAPIResult from "../../api/videos/videoAPIResult";


const VideoScreen = () => {

    const [term, result, setTerm, errMessage, getAPI] = videoAPIResult();

    return(
        <View style={styles.container}>
            <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={getAPI}
            />
            {errMessage ? <Text>{errMessage}</Text> : null}
           
           {console.log(result)}

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
       marginTop: 40
    }
})


export default VideoScreen;