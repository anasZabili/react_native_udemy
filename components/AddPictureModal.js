import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { TextInput, Button, Modal, Portal } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { useDownloadURL } from "react-firebase-hooks/storage";

const AddPictureModal = ({ modal, handleClose, setImage }) => {
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

  return (
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
  );
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

export default AddPictureModal;
