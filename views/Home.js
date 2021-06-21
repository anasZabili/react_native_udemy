import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Colors,
} from "react-native";
import { Card, FAB } from "react-native-paper";
import { projectFirestore } from "../firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";

const Home = ({ navigation }) => {
  const [cards, loading, error] = useCollection(
    projectFirestore.collection("employee-profil"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <View style={styles.root}>
      {error && <Text>Erreur: {JSON.stringify(error)}</Text>}
      {loading && <ActivityIndicator animating={true} />}
      {cards && (
        <FlatList
          data={cards.docs}
          renderItem={({ item }) => {
            return (
              <Card
                style={styles.card}
                key={item.id}
                onPress={() => navigation.navigate("Profil", item)}
              >
                <View style={styles.cardView}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
                    }}
                  />
                  <View style={styles.textView}>
                    <Text style={styles.text}>{item.data().name}</Text>
                    <Text style={styles.text}>{item.data().email}</Text>
                  </View>
                </View>
              </Card>
            );
          }}
        />
      )}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate("CreateEmployee")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  card: {
    // flex: 1,
    backgroundColor: "#edf3fc",
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  textView: {
    marginLeft: 15,
  },
  text: {
    fontSize: 18,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    padding: 10,
    // jus: "flex-start",
  },
  cardView: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "lightgray",
  },
});
export default Home;
