import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";


const TriviaResultShow = ({ result }) => {


  const [answerOne, setAnswerOne] = useState(false);
  const [answerTwo, setAnswerTwo] = useState(false);
  const [answerThree, setAnswerThree] = useState(false);
  const [answerFour, setAnswerFour] = useState(false);


  const [isSelected, setSelection] = useState(false);



    return(

        <View style={styles.container}>

       <View style={styles.questionContainer}>
         <Text style={styles.label}>{result.question}</Text>
       </View>
       
       <Text style={styles.topic}>{result.category}</Text>




     <View  style={styles.questionsContainer}>
      <Text>{result.incorrect_answers[0]} {answerOne ? "👎" : null}</Text>
      {result.incorrect_answers[0] ?   <CheckBox
          value={answerOne}
          onValueChange={setAnswerOne}
          style={styles.checkbox}
        /> : null}
     </View>


     <View style={styles.questionsContainer}>
      <Text>{result.incorrect_answers[1]} {answerTwo ? "👎" : null}</Text>
      {result.incorrect_answers[1] ?     <CheckBox
          value={answerTwo}
          onValueChange={setAnswerTwo}
          style={styles.checkbox}
        /> : null}
      </View>


     <View style={styles.questionsContainer}>
      <Text>{result.incorrect_answers[2]} {answerThree ? "👎" : null}</Text>
      {result.incorrect_answers[2] ? 
      <CheckBox
          value={answerThree}
          onValueChange={setAnswerThree}
          style={styles.checkbox}
        /> : null}
      </View>

  

     <View style={styles.questionsContainer}>
      <Text>{result.incorrect_answers[3]} {answerFour ? "👎" : null}</Text>
      {result.incorrect_answers[3] ? 
      <CheckBox
          value={answerFour}
          onValueChange={setAnswerFour}
          style={styles.checkbox}
        /> : null}
     </View>


     <View style={styles.questionsContainer}>
     <Text>{result.correct_answer} {isSelected ? "👍" : null}</Text>
     {result.correct_answer ? 
      <CheckBox
      value={isSelected}
      onValueChange={setSelection}
      style={styles.checkbox}
    /> : null}
     
      </View> 

</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 55,
      },
      questionContainer: {
        flexDirection: "row",
        marginBottom: 10,
      },
      checkbox: {
        alignSelf: "center",
        textAlign: 'center'
      },
      label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
      
      },
       questionsContainer: {
        flexDirection: 'row',
      },
      topic: {
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 5
      }
})


export default TriviaResultShow;


