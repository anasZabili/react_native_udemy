import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./views/Home";
// cett bibliotheque contient un ensemble de constant de taille sur telephone
// nous aidant a gerer  nos espace en fonction de taille connu tel que la taille
// de la status bar etc
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
});
