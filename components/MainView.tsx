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
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.blurBackground} />
        <View style={styles.content}>
          <Text style={styles.title}>Calculator</Text>
          <ContentView />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    position: "relative",
    borderColor: "#5157A3", 
    borderWidth: 5,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  blurBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", 
  },
  content: {
    padding: 20,
  },
  title: {
    color: "#00C3F3",
    fontFamily: "Poppins_600SemiBold",
    textTransform: "uppercase",
    fontSize: 35,
    lineHeight: 84,
    textAlign: "center",
    marginBottom: 0,
    paddingBottom: 0,
  },
});
