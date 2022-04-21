import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";



const VideoFrame = ({ video }) => {
    return(
        <View style={styles.frame}>        

        <Image style={styles.image} source={{uri: video.snippet.thumbnails.high.url}}    />

        <Text style={styles.title}> {video.snippet.title}</Text>

        <Text style={styles.channel}>Channel: {video.snippet.channelTitle}</Text>
        
        <Text style={styles.des}>{video.snippet.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    frame: {
        alignItems: 'center',
        margin: 10,
        marginBottom: 40
    },
    image: {
        width: 300,
        height: 250,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    channel: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'brown'
    },
    des: {
        fontSize: 16
    }
});


export default VideoFrame;