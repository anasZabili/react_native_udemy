import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Linking,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Subheading, Title, Card, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
const Profil = ({ navigation, route }) => {
  const { id, name, position } = route.params;
  const openNumber = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:0723456789");
    } else {
      Linking.openURL("telprompt:0789234567");
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#cfdfe5", "rgb(104, 128, 158)"]}
        style={styles.gradiant}
      />
      {/* <Text style={styles.text}>Sign in with Facebook</Text> */}
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          }}
        />
      </View>
      <View style={styles.informationView}>
        <Title>{name}</Title>
        <Subheading>{position}</Subheading>
      </View>
      <Card
        style={styles.card}
        onPress={() => {
          Linking.openURL("mailto:test@test.com");
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons
            name="email"
            size={34}
            color="gray"
            style={styles.informationIcon}
          />
          <Text style={styles.informationText}>test@test.com</Text>
        </View>
      </Card>
      <Card style={styles.card} onPress={openNumber}>
        <View style={styles.cardContent}>
          <MaterialIcons
            name="phone"
            size={34}
            color="gray"
            style={styles.informationIcon}
          />
          <Text style={styles.informationText}>0738982367</Text>
        </View>
      </Card>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <MaterialIcons
            name="attach-money"
            size={34}
            color="gray"
            style={styles.informationIcon}
          />
          <Text style={styles.informationText}>3500€ net/mois</Text>
        </View>
      </Card>
      <View style={styles.buttonsView}>
        <Button
          style={styles.button}
          icon="pencil"
          mode="contained"
          onPress={() => console.log("Pressed")}
          theme={theme}
        >
          Edit
        </Button>
        <Button
          style={styles.button}
          icon="delete"
          mode="contained"
          onPress={() => navigation.goBack()}
          theme={theme}
        >
          Delete
        </Button>

        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.push("Profil")}
          theme={theme}
        >
          Retourner dans profil de nouveau
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // justifyContent: "flex-start",
  },
  gradiant: {
    height: "15%",
  },
  image: { width: 140, height: 140, borderRadius: 70, margin: -65 },
  imageView: {
    alignItems: "center",
  },
  informationView: {
    marginTop: 100,
    alignItems: "center",
  },
  card: {
    margin: 5,
  },
  cardContent: { flexDirection: "row", alignItems: "center" },
  informationIcon: { margin: 6 },
  informationText: { fontSize: 16, fontWeight: "600" },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    width: "30%",
  },
});
const theme = {
  colors: {
    primary: "rgb(104, 128, 158)",
  },
};

export default Profil;
