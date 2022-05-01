import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import SearchBar from "../../components/videos/SearchBar";
import videoAPIResult from "../../api/videos/videoAPIResult";
import VideoFrame from "../../components/videos/videoFrame";
import { withNavigation } from "react-navigation";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';


const VideoScreen = ({ navigation }) => {

    const [term, result, setTerm, errMessage, getAPI] = videoAPIResult();



   

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
         data={result}
         keyExtractor={(theID) => theID.id}
         ListFooterComponent={<View style={{height: 40}}/>}
         renderItem={({ item }) => {
             return(
                 <TouchableOpacity onPress={() => {
                    const _handleOpenWithWebBrowser = () => {
                        WebBrowser.openBrowserAsync(`https://youtube.com/watch/${item.id.videoId}`);
                    }      
                  _handleOpenWithWebBrowser()
                 }}>
                 <VideoFrame
                 video={item}
                 />
                 </TouchableOpacity>
             )
         }}
         />




        </View>
    )
}



const styles = StyleSheet.create({
    container: {
       marginTop: 40,
    },
    topR: {
        color: 'blue',
        marginLeft: 10
    },
    footer: {
        height: 20
    }
})






export default withNavigation(VideoScreen);