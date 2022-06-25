import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#e5e5e5",
      alignItems: "center",
      justifyContent: "center",
    },
    title:{
      color:"#25282a",
      fontSize:20,
      marginBottom:15,
    },
    noImgContainer:{
      justifyContent:"center"
    },
    imgContainer:{
      maxHeight:375,
      height:"100%",
      width:"88%",
      flex:1,
      marginBottom:20,
      alignItems:"center",
      justifyContent: "center",
      resizeMode: "contain",
      borderWidth:1,
      borderRadius:28,
      borderColor:"#002185",
      backgroundColor:"#dadfe5",
    },
    buttonSelect:{
      borderColor:"#002185",
      backgroundColor:"#0047b6",
    },
    buttonSend:{
      marginTop: 'auto'
    },
    buttonImg: {
      maxHeight:60,
      width: "42%",
      marginRight: 15,
      height: 50,
      borderRadius: 5,
      marginTop: 20,
      backgroundColor: "#0047b6",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonUpload: {
      maxHeight:60,
      width: "42%",
      height: 50,
      borderRadius: 5,
      marginTop: 20,
      backgroundColor: "#0047b6",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText: {
      fontSize: 18,
      color: "#fff",
    },
    thumbnail: {
      width: "90%",
      height: "80%",
      resizeMode: "contain",
      borderRadius: 5,
    },
    input:{
      maxHeight:60,
      height:"100%",
      width: "88%",
      borderWidth:1,
      borderColor:"#ced4da",
      fontSize:18,
      paddingLeft:"5%",
      borderRadius: 8,
      marginTop: 15 
    },
    viewButton: {
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
    }
  });
  export default styles