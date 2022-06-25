import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    fundo: {
        flex: 1,
        backgroundColor: '#dadfe5'
    },
    container: {
        borderWidth: 2,
        padding: 10,
        width: '100%',
        height: 70,
        backgroundColor: '#dadfe5',
        flexDirection: 'row',
        borderColor: '#dadfe5'
    },
    textInput: {
        borderRadius: 22,
        width: '100%',
        marginRight: 4,
        paddingLeft: 10,
        paddingRight: 50,
        fontSize: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ced4da'
    },
    Btn: {
        width: 40,
        height: 40,
        marginLeft: 30,
        position: 'absolute',
        right: 10,
        bottom: 6
    }

})
export default styles