import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import styles from "../../style/card/card";

export const Container = (props) => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: props.imageLink }} />
        <Text style={[styles.title, { fontFamily: "Roboto_400Regular" }]}>
          {props.title}
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.btnText, { fontFamily: "Roboto_700Bold" }]}>
            Entre em contato
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Container;