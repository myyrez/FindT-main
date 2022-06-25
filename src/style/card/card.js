import { StyleSheet } from "react-native";



const carregasaporra = () => {

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxHeight: 250,
    height: "100%",
    marginBottom: "20%"
  },
  image: {
    width: "88%",
    height: "65%",
    resizeMode: "contain",
    borderRadius: 25,
  },
  title: {

    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  btn: {
    height: "16%",
    width: "85%",
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "#0047b6",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
   
    color: "#fff",
    fontSize: 18,
  },
});
export default styles