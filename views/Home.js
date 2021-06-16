import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

const Home = () => {
  const cards = [
    { id: 1, name: "anas", position: "web dev" },
    { id: 2, name: "didier", position: "ux designer" },
    { id: 3, name: "anas", position: "css expert" },
    { id: 4, name: "anas", position: "coffe maker" },
  ];
  return cards.map((value, index) => {
    return (
      <Card style={styles.card} key={value.id}>
        <View style={styles.cardView}>
          <Image
            style={styles.image}
            source={{
              uri: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
            }}
          />
          <View style={styles.textView}>
            <Text style={styles.text}>{value.name}</Text>
            <Text style={styles.text}>{value.position}</Text>
          </View>
        </View>
      </Card>
    );
  });
};

const styles = StyleSheet.create({
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
});
export default Home;
