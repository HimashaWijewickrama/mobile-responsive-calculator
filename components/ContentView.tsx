import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  Button,
  Alert,
  View,
} from "react-native";
import React, { useState } from "react";

export default function ContentView() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [showResult, setShowResult] = useState("");

  const onChangeInputOne = (newInputOne: string) => {
    setInputOne(newInputOne);
  };
  const onChangeInputTwo = (newInputTwo: string) => {
    setInputTwo(newInputTwo);
  };
  const onChangeShowResult = (newAnswer: string) => {
    setShowResult(newAnswer);
  };
  const onClickReset = () => {
    setInputOne("");
    setInputTwo("");
    setShowResult("");
  };

  var message = "";

  var inputOneInt = parseInt(inputOne);
  var inputTwoInt = parseInt(inputTwo);

  const onClickAdd = () => {
    console.log(inputOne);
    if (inputOne === " " || inputTwo === " ") {
      message = "Please enter numbers";
    } else {
      let addingAnswer = inputOneInt + inputTwoInt;
      setShowResult(addingAnswer.toString());
    }
  };
  const onClickSubtract = () => {
    let deductingAnswer = parseInt(inputOne) - parseInt(inputTwo);
    setShowResult(deductingAnswer.toString());
  };
  const onClickMultiply = () => {
    let multiplyingAnswer = parseInt(inputOne) * parseInt(inputTwo);
    setShowResult(multiplyingAnswer.toString());
  };
  const onClickDivide = () => {
    let dividingAnswer = parseInt(inputOne) / parseInt(inputTwo);
    setShowResult(dividingAnswer.toString());
  };
  return (
    <SafeAreaView>
      <Text style={styles.label}>Enter Number One : </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeInputOne}
        value={inputOne}
        placeholder="Enter your 1st number*"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Enter Number Two : </Text>

      <TextInput
        style={styles.input}
        value={inputTwo}
        onChangeText={onChangeInputTwo}
        placeholder="Enter your 2nd number*"
        keyboardType="numeric"
      />
      <View style={styles.fixToText}>
        <View style={styles.fixToButton}>
          <Button title="Add + " onPress={onClickAdd} />
        </View>
        <View style={styles.fixToButton}>
          <Button title="Subtract - " onPress={onClickSubtract} />
        </View>
      </View>
      <View style={styles.fixToText}>
        <View style={styles.fixToButton}>
          <Button title="Mulitply x " onPress={onClickMultiply} />
        </View>
        <View style={styles.fixToButton}>
          <Button title="Divide / " onPress={onClickDivide} />
        </View>
      </View>

      <Text style={styles.userMessage}>{message}</Text>
      <Text style={styles.label}>Final Result : </Text>

      <TextInput
        style={styles.input}
        value={showResult}
        onChangeText={onChangeShowResult}
        placeholder="Result*"
        readOnly={true}
      />
      <View style={styles.fixToText}>
        <View style={styles.fixToButton}>
          <Button title="Reset " onPress={onClickReset} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#F0F0F0",
    opacity: 0.8,
  },
  label: {
    color: "#03346E",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    margin: 5,
    padding: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "red",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
  },
  fixToButton: {
    width: "50%",
    padding: 5,
  },
  userMessage: {
    color: "red",
    fontFamily: "Arial",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "left",
    margin: 5,
    padding: 5,
  },
});
