import React from "react";
import { StyleSheet, View } from "react-native";
import BackgroundView from "./components/BackgroundView";
import { StatusBar } from 'expo-status-bar';

const App = () => (
  <View style={styles.container}>
    <BackgroundView />
    <StatusBar style="light" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
