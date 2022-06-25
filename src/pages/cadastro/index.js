import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import { Checkbox } from 'react-native-paper';

import style from "../../style/cadastro/cadastro"



export default function Cadastro({ navigation }) {

    const [checked, setChecked] = useState(false);
    return (
        <View style={style.container}>

            {/* <View style={style.titleBar}>
                <Image source='' style={style.image} />
            </View> */}

            <View style={style.containerDois}>
                <TextInput style={style.inputEmail} keyboardType={"default"} placeholder="Nome"></TextInput>

                <TextInput style={style.inputSenha} keyboardType={"default"} placeholder="E-mail"></TextInput>

                <TextInput style={style.inputEmail} keyboardType={"default"} placeholder="Senha"></TextInput>

                <TextInput style={style.inputSenha} keyboardType={"default"} placeholder="Confirmar senha"></TextInput>

                <View style={style.checkboxContainer}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color="#0047b6"
                    />
                    <Text style={style.textCheckBox}>Aceitar termos de serviço</Text>
                </View>

                <TouchableOpacity style={style.barra}></TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Login')} ><Text style={style.textButton}>Vamos lá!</Text></TouchableOpacity>
            </View>


        </View>
    )
}