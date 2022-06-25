import React from "react"
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import style from "../../style/login/login"

const Login = ({ navigation }) => {

    return (
        <View style={style.container}>

            <View style={style.titleBar}>
                <Image style={style.image} />
            </View>

            <View style={style.containerDois}>
                <TextInput style={style.inputEmail} keyboardType={"default"} placeholder="E-mail"></TextInput>

                <TextInput style={style.inputSenha} keyboardType={"default"} placeholder="Senha"></TextInput>


                <Text style={style.textEsquece}>Esqueceu sua senha?</Text>
                <TouchableOpacity style={style.barra}></TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={style.button}><Text style={style.textButton}>Vamos lá!</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default Login;