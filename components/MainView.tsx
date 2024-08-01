import { StyleSheet, Text, View } from "react-native";
import ContentView from "./ContentView";

export default function MainView() {
  return (
    <View style={styles.main}>
          <Text style={styles.title}>Calculator</Text>
      <ContentView />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F0F0F0",
    opacity: 0.8,
  },
  title: {
    color: "#1E0342",
    fontFamily: "Arial",
    fontSize: 35,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
});
