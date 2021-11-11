import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Appearance, useColorScheme } from "react-native";
import MIddlePart from "./components/MIddlePart";
import Title from "./components/Title";

export default function App() {
  let colorScheme = useColorScheme();
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const themeTextStyle =
    colorScheme === "light" ? styles.darkText : styles.lightText;

  return (
    <SafeAreaView style={[styles.container, themeContainerStyle]}>
      <SafeAreaView style={{ position: "absolute", top: 20, right: 100 }}>
        <Title />
      </SafeAreaView>
      <MIddlePart />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  lightText: {
    color: "#fff",
  },
  darkText: {
    color: "#111",
  },
});
