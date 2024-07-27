import { StyleSheet, Text, View } from "react-native";
import ContentView from "./ContentView";

export default function MainView() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>Native Calculator</Text>
      <ContentView/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#F0F0F0",
    opacity: 0.8,
  },
  title: {
    color: "#000000",
    fontFamily: "Cochin",
    fontSize: 35,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
});
