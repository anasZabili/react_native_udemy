import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./views/Home";
import CreateEmployee from "./views/CreateEmployee";
import Profil from "./views/Profil";
// cett bibliotheque contient un ensemble de constant de taille sur telephone
// nous aidant a gerer  nos espace en fonction de taille connu tel que la taille
// de la status bar etc
import Constants from "expo-constants";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* <Home /> */}
        {/* <CreateEmployee /> */}
        <Profil />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
});
