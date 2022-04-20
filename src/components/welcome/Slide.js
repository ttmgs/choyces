import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';



const Slide = ({ item }) => {
  const { title, desc, backgroundColor } = item;
  
  return (

    <View style={[styles.slide, { backgroundColor }]}>
      <View style={styles.image_container}>
   </View>
   <Text style={styles.title}>{title}</Text>
   <Image style={styles.image} source={require('../../images/choyces.png')} />
      <Text style={styles.text}>{desc}</Text>
    </View>

  );
};
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  slide: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10

  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10
  },
  image: {
      alignSelf: 'center'
  },
  image_container: {
    position: 'absolute',
    marginTop: 30
  }

});

export default Slide;


