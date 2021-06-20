import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
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
import { projectFirestore } from "./firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";

const Stack = createStackNavigator();

export default function App() {
  // const messagesRef = projectFirestore.collection("employee-profil");
  // const query = messagesRef.orderBy("createdAt");

  // const [messages] = useCollectionData(query);
  // const [value, loading, error] = useCollection(
  //   projectFirestore.collection("employee-profil"),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );
  // console.log(
  //   "🚀 ~ file: App.js ~ line 23 ~ App ~ messages",
  //   value?.docs?.data
  // );

  // chargement des données a l'initialisation de l'application pour la stocker
  // dans le store
  const [data, loading, error] = useCollection(
    projectFirestore.collection("employee-profil"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  // let cards = [];
  // data.docs.forEach((doc) => {
  //   // must wait for the server to create the timestamp & send it back
  //   doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
  // });
  const cards = useMemo(() => {
    if (loading || error) return;
    return data.docs.map((value) => {
      console.log(value.data());
      return { ...value.data(), id: value.id };
    });
  }, [data]);
  console.log("🚀 ~ file: App.js ~ line 51 ~ App ~ cards", cards);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "lightgray",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          initialRouteName="Home"
        >
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
