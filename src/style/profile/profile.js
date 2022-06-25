import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    // flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  viewPerfil: {
    width: "80%",
    height: 350,
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
  },
  imagemUsuario: {
    height: 100,
    width: 100,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 15,
  },
  input: {
    width: "80%",
    height: 50,
    borderRadius: 8,
    padding: 15,
    margin: 5,
    fontSize: 18,
    color: "#000",
    backgroundColor: "#fff",
    borderColor: "#ced4da",
    borderWidth: 1,
  },
  viewButton: {
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  editar: {
    width: "40%",
    marginRight: 8,
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "#0047b6",
    justifyContent: "center",
    alignItems: "center"
  },
  deletar: {
    width: "40%",
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "#0047b6",
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontSize: 20,
    color: "#fff",
  },
});