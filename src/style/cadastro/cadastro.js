import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f4f4f4",
        height: "100%",
        width: "100%"
    },
    titleBar:{
        width: "100%",
        height: 50,
        justifyContent :"center",
        marginTop: 20, 
    },
    image:{
        height: 90,
        width: "100%",
        resizeMode: "cover",
        marginTop: 45,
    },
    containerDois: {
        width: "100%",
        height: 260,
        marginTop: 170,
        justifyContent: "center",
        alignItems: "center",
    },
    inputEmail:{
        width: "70%",
        height: 55,
        borderRadius: 8,
        padding: 15,
        fontSize: 18,
        color : "#000",
        backgroundColor: "#fff",
        borderColor: "#ced4da",
        borderWidth: 1
    },
    inputSenha:{
        width: "70%",
        height: 55,
        borderRadius: 8,
        padding: 15,
        margin: 20,
        fontSize: 18,
        color : "#000",
        backgroundColor: "#fff",
        borderColor: "#ced4da",
        borderWidth: 1
    },
    button:{
        width: "61%",
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: "#0047b6",
        justifyContent: "center",
        alignItems: "center"
    },
    textEsquece:{
        fontSize: 20,
        marginTop: 40,
        color : "#373a3c"
    },
    barra:{
        width: "60%",
        height: 2,
        backgroundColor: "#373a3c",
        marginTop: 15,
        marginBottom: 20
    },
    checkboxContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    checkbox:{
        marginBottom: "auto",
        height: 20,
        width: 20,
    },
    textCheckBox:{
        margin: 8,
        fontSize: 20,
        marginBottom: 10
    },
    textButton:{
        textAlign: "center",
        justifyContent: "center",
        fontSize: 25,
        color : "#fff"
    },
  
})