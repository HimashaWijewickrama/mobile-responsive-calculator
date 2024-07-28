import { StyleSheet, Text, View } from "react-native";
import ContentView from "./ContentView";

export default function MainView() {
  return (
    <View style={styles.main}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#03346E" }} />
        <View>
          <Text style={styles.title}>Simple Calculator</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#03346E" }} />
      </View>
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
