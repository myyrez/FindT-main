import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Sliders from '../../components/slides/slides'
import styles from '../../style/inicio/inicio'

export default function Inicio({ navigation }) {

  return (

    <View style={styles.container}>
      <View style={styles.viewEnter}>
        <Text style={styles.texteEnter} onPress={() => navigation.navigate('Login')} >ENTRAR </Text>
      </View>
      <Sliders />
      <View style={styles.viewBtnCadastro}>
        <TouchableOpacity style={styles.BtnCadastro} onPress={() => navigation.navigate('Cadastro')}><Text style={styles.btnCadastroText}>Vamos lá!</Text></TouchableOpacity>
      </View>
    </View>
  );
}