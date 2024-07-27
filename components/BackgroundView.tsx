import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import MainView from "./MainView";

const image = require("../assets/background-image.jpg");

export default function BackgroundView() {
  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <MainView />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
