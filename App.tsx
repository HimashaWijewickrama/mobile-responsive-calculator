import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainView from "./components/MainView";

const image = require("./assets/background-image.jpg");

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <MainView />
    </ImageBackground>
    <StatusBar style="light" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
