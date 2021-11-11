import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Appearance, useColorScheme } from "react-native";

const Title = () => {
  let colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.darkText : styles.lightText;
  return (
    <SafeAreaView
      style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={[themeTextStyle, styles.text]}> Quote Up✨</Text>
    </SafeAreaView>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 30,
  },
  lightText: {
    color: "#fff",
  },
  darkText: {
    color: "#111",
  },
});
