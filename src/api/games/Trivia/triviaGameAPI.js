import React, { useState } from"react";
import { View, Text, StyleSheet } from "react-native";



export default () => {

     const [result, setResult] = useState([]);
     const url = "https://opentdb.com/api.php?amount=10"


   async function getTriviaAPI() {
       await
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                    setResult(data.results)
            })
    }

    return [result, getTriviaAPI]
}