import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { TextInput, Button, Modal, Portal } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import AddPictureModal from "../components/AddPictureModal";
import useAddDocument from "../hooks/useAddDocument";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);

  const [addDocument, id, isLoading, error] = useAddDocument("employee-profil");
  console.log(
    "🚀 ~ file: CreateEmployee.js ~ line 18 ~ CreateEmployee ~ error",
    error
  );

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const handleClose = () => {
    setModal(false);
  };
  const handleUploadImage = () => {
    setModal(true);
  };
  const handleClick = () => {
    addDocument({
      name,
      phone: phoneNumber,
      salary,
      email,
    });
  };
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.textInput}
        label="Name"
        value={name}
        mode="outlined"
        theme={inputTheme}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        style={styles.textInput}
        label="Email"
        value={email}
        mode="outlined"
        theme={inputTheme}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.textInput}
        label="Phone"
        keyboardType="number-pad"
        value={phoneNumber}
        mode="outlined"
        theme={inputTheme}
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Salary"
        value={salary}
        keyboardType="number-pad"
        theme={inputTheme}
        onChangeText={(salary) => setSalary(salary)}
      />
      <Button
        icon="upload"
        mode="contained"
        onPress={handleUploadImage}
        style={styles.uploadButton}
      >
        Upload Image
      </Button>
      <Button
        icon="content-save"
        mode="contained"
        onPress={handleClick}
        style={styles.uploadButton}
      >
        Save
      </Button>
      <AddPictureModal
        modal={modal}
        handleClose={handleClose}
        setImage={setImage}
      />
    </View>
  );
};

const inputTheme = {
  colors: {
    primary: "gray",
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 5,
  },
  textInput: {
    margin: 10,
  },
  button: {
    width: "40%",
  },
  containerStyle: {
    backgroundColor: "#edf3fc",
    position: "absolute",
    width: "100%",
    bottom: 2,
    padding: 20,
    // height: 400,
    // margin: 30,
    borderRadius: 15,
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  selectButton: {
    backgroundColor: "rgb(104, 128, 158)",
  },

  modalView: {
    justifyContent: "flex-end",
  },
  uploadButton: {
    margin: 20,
    backgroundColor: "rgb(104, 128, 158)",
  },
});

export default CreateEmployee;
