import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: "#f4f4f4"
    },
    header: {
        width: '100%',
        height: 49,
        position: 'absolute'
    },
    viewImg: {
        height: '60%',
        width: '100%'
    },
    Img: {
        resizeMode: 'stretch',
        borderWidth: 5,
        height: '100%',
        width: '100%'
    },
    title: {
        paddingTop: 18,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0047b6',
        alignSelf: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#000',
        paddingHorizontal: 25,
        fontSize: 15
    },
    textDescricao: {
        height: "20%",
        alignItems: "center",
        justifyContent: "center"
    }
})
export default styles