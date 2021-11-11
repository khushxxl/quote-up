import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Appearance, useColorScheme } from "react-native";

const MIddlePart = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("Click to get a Quote");

  let colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightText : styles.darkText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.darkContainer : styles.lightContainer;

  const loadData = async () => {
    await fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "4779dc47c5msh351220688aa7feap135942jsn19adf77c6eed",
      },
    })
      .then(async (response) => {
        const res = response.json();
        await setData(res);
        console.log(data);
        await setName("-by " + data._W.originator.name);
        await setQuote(data._W.content);
      })
      .catch((err) => {
        console.log(err);
      });
    // setData(response.json());
    // setName("-by " + data._W.originator.name);
    // setQuote(data._W.content);
  };
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={{ padding: 30 }}>
        <Text
          style={[
            {
              marginBottom: 20,
              alignItems: "center",
              color: colorScheme === "light" ? "black" : "white",
              fontWeight: "700",
            },
          ]}
        >
          {quote}
        </Text>
      </View>

      <Text
        style={[
          {
            marginBottom: 20,
            alignItems: "center",
            color: colorScheme === "light" ? "black" : "white",
          },
        ]}
      >
        {name}
      </Text>

      <TouchableOpacity
        style={[styles.buttonStyle, themeContainerStyle]}
        onPress={loadData}
      >
        <Text
          style={[
            {
              textAlign: "center",
              alignItems: "center",
              borderRadius: 30,
            },
            themeTextStyle,
          ]}
        >
          New Quote
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MIddlePart;

const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    padding: 14,
    width: 170,
  },
  lightText: {
    color: "#fff",
  },
  darkText: {
    color: "#111",
  },
  lightContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  darkContainer: {
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});
