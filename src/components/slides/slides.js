import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from "../../style/slider/slider";

const slides = [
  {
    key: '1',
    title: 'Bem-vindo!',
    text: 'Bem-vindo ao FindT! Um aplicativo onde você pode procurar pelos seus itens perdidos na instituição SENAI.',
    image: ''
  },
  {
    key: '2',
    title: 'Como usar?',
    text: 'Como aluno, você poderá procurar pelos itens através de postagens, as quais profissionais do SENAI podem publicar, na página principal.',
    image: ''
  },

  {
    key: '3',
    title: 'Começando bem!',
    text: 'Faça um cadastro usando seu email institucional ou faça login se já estiver cadastrado.',
    image: ''
  },

]

export default function Sliders() {

  const [showhome, serhome] = useState(false)


  function renderSlides({ item }) {
    return (

      <View style={styles.fundo}>
        <View style={styles.header} ></View>

        <View style={styles.viewImg}  >
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLs-KeLlSvrGv407axcCEYsGHgMuCqsoyxA&usqp=CAU' }} style={styles.Img} />
        </View>
          <Text style={styles.title} >{item.title}</Text>

        <View style={styles.textDescricao}>
          <Text style={styles.text}> {item.text} </Text>
        </View>

      </View>

    )
  }

  if (showhome) {
    return <Text> foii</Text>
  }
  else {
    return (

      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{ backgroundColor: '#0047b6', width: 30, marginBottom: 60 }}
        dotStyle={{ backgroundColor: '#e5e5e5', marginBottom: 60 }}
        renderNextButton={() => { }}
        renderDoneButton={() => { }}
      />


    );
  }

}
