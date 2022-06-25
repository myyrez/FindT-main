import React from 'react'
import { View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import styles from '../../style/search/search';


export default function Search() {
  return (
    <View style={styles.fundo}>
      <View style={styles.container}>
        <TextInput returnKeyType='search' style={styles.textInput} />
        <TouchableOpacity style={styles.Btn}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
