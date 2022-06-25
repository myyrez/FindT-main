import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image, KeyboardAvoidingView } from "react-native";
import styles from '../../style/profile/profile';

const Profile = () => {
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.viewPerfil}>
        <Image source='' style={styles.imagemUsuario} />
        <Text
          style={styles.input}
          placeholder={"Email"}
          keyboardType={"default"}
        />
        <Text
          style={styles.input}
          placeholder={"Nome"}
          keyboardType={"default"}
        />
        <Text
          style={styles.input}
          placeholder={"Senha"}
          keyboardType={"default"}
        />
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.editar}>
          <Text style={styles.textButton}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deletar}>
          <Text style={styles.textButton}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Profile;