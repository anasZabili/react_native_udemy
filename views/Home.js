import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  const cards = [
    {
      id: "1",
      name: "anas",
      position: "web dev",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "2",
      name: "didier",
      position: "ux designer",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "3",
      name: "anas",
      position: "css expert",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "4",
      name: "raimon",
      position: "coffe maker",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "5",
      name: "pluriel",
      position: "tea maker",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "6",
      name: "mario",
      position: "chocolat maker",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "7",
      name: "luigi",
      position: "clean maker",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "8",
      name: "bowser",
      position: "desaster maker",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "9",
      name: "mario",
      position: "chocolat maker",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "10",
      name: "luigi",
      position: "clean maker",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "11",
      name: "bowser",
      position: "desaster maker",
      email: "test@test.com",
      salary: "3500 $",
      phone: "078723457866",
      picture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
  ];
  // return cards.map((value, index) => {
  //   return (
  //     <Card style={styles.card} key={value.id}>
  //       <View style={styles.cardView}>
  //         <Image
  //           style={styles.image}
  //           source={{
  //             uri: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  //           }}
  //         />
  //         <View style={styles.textView}>
  //           <Text style={styles.text}>{value.name}</Text>
  //           <Text style={styles.text}>{value.position}</Text>
  //         </View>
  //       </View>
  //     </Card>
  //   );
  // });
  return (
    <View style={styles.root}>
      <FlatList
        data={cards}
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
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.position}</Text>
                </View>
              </View>
            </Card>
          );
        }}
      />
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
