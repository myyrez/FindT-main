import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  TextInput,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import styles from "../../style/post/post";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [doc, setDoc] = useState("");
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "/",
      copyToCacheDirectory: true,
    }).then((response) => {
      if (response.type == "success") {
        let { name, size, uri } = response;

        if (Platform.OS === "android" && uri[0] === "/") {
          uri = `file://${uri}`;
          uri = uri.replace(/%/g, "%25");
        }

        let nameParts = name.split(".");
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          size: size,
          uri: uri,
          type: "application/" + fileType,
        };
        console.log(fileToUpload, "...............file");
        setDoc(fileToUpload);
      }
    });
    // console.log(result);
    console.log("Doc: " + doc.uri);
  };
  useEffect(() => {
    setSelectedImage(doc.uri);
  }),
    [];
  const postDocument = () => {
    const url = "http://172.20.60.50:3000/upload";
    const fileUri = doc.uri;
    const formData = new FormData();
    formData.append("document", doc);
    const options = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(formData);

    fetch(url, options).catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      {selectedImage != null ? (
        <View style={styles.imgContainer}>
          <Text style={styles.title}>A imagem que você selecionou:</Text>
          <Image style={styles.thumbnail} source={{ uri: selectedImage }} />
        </View>
      ) : (
        <View style={[styles.imgContainer, styles.noImgContainer]}>
          <Text style={styles.title}>Imagem não selecionada</Text>
        </View>
      )}

      <TextInput style={styles.input} placeholder="Digite o nome do item" />

      <View style={styles.viewButton}>
        <TouchableOpacity
          onPress={pickDocument}
          style={[styles.buttonImg, styles.buttonSelect]}
        >
          <Text style={styles.buttonText}>Escolher imagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonUpload, styles.buttonSend]}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
