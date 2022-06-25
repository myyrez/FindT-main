import React from 'react-native'
import { View, StatusBar } from "react-native";
import Routes from './src/routes/routes'



export default function App() {
  return (
    <View style={{ flex: 1 }}>

      <Routes />

      <StatusBar barStyle='dark' />
    </View>
  );
}
