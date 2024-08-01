import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ContentView() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [showResult, setShowResult] = useState("");
  const [errorInputOne, setErrorInputOne] = useState("");
  const [errorInputTwo, setErrorInputTwo] = useState("");

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const onChangeInputOne = (newInputOne: string) => {
    setInputOne(newInputOne);
    setErrorInputOne("");
  };
  const onChangeInputTwo = (newInputTwo: string) => {
    setInputTwo(newInputTwo);
    setErrorInputTwo("");
  };
  const onChangeShowResult = (newAnswer: string) => {
    setShowResult(newAnswer);
  };
  const onClickReset = () => {
    setInputOne("");
    setInputTwo("");
    setShowResult("");
    setErrorInputOne("");
    setErrorInputTwo("");
  };

  const validateInputs = () => {
    let valid = true;
    if (isNaN(Number(inputOne)) || inputOne.trim() === "") {
      setErrorInputOne("Please enter a valid number*");
      valid = false;
    }
    if (isNaN(Number(inputTwo)) || inputTwo.trim() === "") {
      setErrorInputTwo("Please enter a valid number*");
      valid = false;
    }
    return valid;
  };

  const onClickAdd = () => {
    if (validateInputs()) {
      let addingAnswer = parseInt(inputOne) + parseInt(inputTwo);
      setShowResult(addingAnswer.toString());
    }
  };

  const onClickSubtract = () => {
    if (validateInputs()) {
      let deductingAnswer = parseInt(inputOne) - parseInt(inputTwo);
      setShowResult(deductingAnswer.toString());
    }
  };

  const onClickMultiply = () => {
    if (validateInputs()) {
      let multiplyingAnswer = parseInt(inputOne) * parseInt(inputTwo);
      setShowResult(multiplyingAnswer.toString());
    }
  };

  const onClickDivide = () => {
    if (validateInputs()) {
      let dividingAnswer = parseInt(inputOne) / parseInt(inputTwo);
      setShowResult(dividingAnswer.toString());
    }
  };

  return (
    <SafeAreaView style={styles.contentView}>
      <Text style={styles.label}>Enter Number One : </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeInputOne}
        value={inputOne}
        placeholder="Enter your 1st number*"
        keyboardType="numeric"
      />
      {errorInputOne ? <Text style={styles.error}>{errorInputOne}</Text> : null}

      <Text style={styles.label}>Enter Number Two : </Text>
      <TextInput
        style={styles.input}
        value={inputTwo}
        onChangeText={onChangeInputTwo}
        placeholder="Enter your 2nd number*"
        keyboardType="numeric"
      />
      {errorInputTwo ? <Text style={styles.error}>{errorInputTwo}</Text> : null}
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
          <TouchableOpacity style={styles.buttonContainer} onPress={onClickAdd}>
            <FontAwesome6 name="add" size={32} style={styles.buttonIcon} />
            {/* <Text style={styles.buttonText}>Addition</Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.fixToButton}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onClickSubtract}
          >
            <FontAwesome6 name="minus" size={28} style={styles.buttonIcon} />
            {/* <Text style={styles.buttonText}>Subtract</Text> */}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fixToText}>
        <View style={styles.fixToButton}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onClickDivide}
          >
            <FontAwesome6 name="divide" size={28} style={styles.buttonIcon} />
            {/* <Text style={styles.buttonText}>Division</Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.fixToButton}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onClickMultiply}
          >
            <FontAwesome6 name="xmark" size={28} style={styles.buttonIcon} />
            {/* <Text style={styles.buttonText}>Multiply</Text> */}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fixToText}>
        <View style={styles.fixToButton}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onClickReset}
          >
            <FontAwesome6 name="eraser" size={28} style={styles.buttonIcon} />
            {/* <Text style={styles.buttonText}>Reset</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentView: {
    margin: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00C3F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonIcon: {
    marginLeft: 90,
    color: "#fff",
  },
  // buttonText: {
  //   color: "#fff",
  //   marginLeft: 10,
  //   fontFamily: "Poppins_700Bold",
  //   letterSpacing: 1,
  // },
  label: {
    color: "#00C3F3",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    margin: 5,
    padding: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: "#3B68AB",
    color: "#fff",
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
  error: {
    color: "#ff3333",
    fontSize: 12,
    marginLeft: 12,
    marginBottom: 8,
    fontWeight: 600,
  },
  userMessage: {
    color: "#ff3333",
    fontFamily: "Arial",
    fontSize: 10,
    fontWeight: 600,
    textAlign: "left",
    margin: 5,
    padding: 5,
  },
});
