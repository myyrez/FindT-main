import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
        height: "100%",
    },
    titleBar: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        marginTop: 20,
    },
    image: {
        height: 90,
        width: "100%",
        resizeMode: "cover",
        marginTop: 45,
    },
    containerDois: {
        width: "100%",
        height: 260,
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    inputEmail: {
        width: "70%",
        height: 55,
        borderRadius: 8,
        padding: 15,
        fontSize: 18,
        color: "#000",
        backgroundColor: "#fff",
        borderColor: "#ced4da",
        borderWidth: 1

    },
    inputSenha: {
        width: "70%",
        height: 55,
        borderRadius: 8,
        padding: 15,
        margin: 20,
        fontSize: 18,
        color: "#000",
        backgroundColor: "#fff",
        borderColor: "#ced4da",
        borderWidth: 1
    },
    button: {
        width: "45%",
        height: 50,
        borderRadius: 5,
        marginTop: 40,
        backgroundColor: "#0047b6"

    },
    textButton: {
        textAlign: "center",
        fontSize: 25,
        marginTop: 5,
        color: "#fff"
    },
    textEsquece: {
        fontSize: 20,
        marginTop: 40,
        color: "#373a3c"
    },
    barra: {
        width: "60%",
        height: 2,
        backgroundColor: "#373a3c",
        marginTop: 40,
    },

})