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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen() {
  return function HomeScreen() {
    return (
      <View style={styles.container}>
        {/* <Home /> */}
        {/* <CreateEmployee /> */}
        <Profil />
        <StatusBar style="auto" />
      </View>
    );
  };
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Acceuil",
            }}
          />
          <Stack.Screen
            name="Profil"
            component={Profil}
            options={{
              title: "Profile",
            }}
          />
          <Stack.Screen
            name="CreateEmployee"
            component={CreateEmployee}
            options={{
              title: "Créer un nouvel employé",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
