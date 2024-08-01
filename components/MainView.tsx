import { StyleSheet, Text, View } from "react-native";
import ContentView from "./ContentView";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

export default function MainView() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Calculator</Text>
      <ContentView />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#e3fbff",
    opacity: 0.8,
    borderColor: "#0C8EA5",
    borderWidth: 8,
    borderRadius: 50,
  },
  title: {
    color: "#3B99D1",
    fontFamily: "Poppins_600SemiBold",
    textTransform: "uppercase",
    fontSize: 35,
    lineHeight: 84,
    textAlign: "center",
  },
});
