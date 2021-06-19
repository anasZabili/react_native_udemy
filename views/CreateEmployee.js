import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { TextInput, Button, Modal, Portal } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

  const [image, setImage] = useState(null);

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

  const pickImageFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  handleClose = () => {
    setModal(false);
  };
  const handleClick = () => {
    setModal(true);
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
        onPress={handleClick}
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
      <Portal>
        <Modal
          visible={modal}
          onDismiss={handleClose}
          contentContainerStyle={styles.containerStyle}
        >
          <View style={styles.modalView}>
            <View style={styles.modalButtonView}>
              <Button
                icon="camera"
                mode="contained"
                onPress={pickImageFromCamera}
                style={styles.selectButton}
              >
                Camera
              </Button>
              <Button
                icon="image"
                mode="contained"
                onPress={pickImageFromLibrary}
                style={styles.selectButton}
              >
                Galerie
              </Button>
            </View>
            <Button
              mode="contained"
              onPress={handleClose}
              style={styles.selectButton}
            >
              Cancel
            </Button>
          </View>
        </Modal>
      </Portal>
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
