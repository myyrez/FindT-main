import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    viewEnter: {
        width: '100%',
        height: 49,
        backgroundColor: "#0047b6",
    },
    texteEnter: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        bottom: -13,
        paddingRight: 15,
        color: '#fff'
    },
    viewBtnCadastro: {
        width: '100%',
        height: 60,
        bottom: 10
    },
    BtnCadastro: {
        width: '100%',
        height: '100%',
        marginTop: 10,
        backgroundColor: "#0047b6",
        alignItems: "center",
        justifyContent: "center"
    },
    btnCadastroText: {
        color: "#fff",
        fontSize: 20,
    }
})
export default styles