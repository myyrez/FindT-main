import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import Home from '../pages/home/index';
import Search from '../pages/search';
import Profile from '../pages/profile';
import Inicio from '../pages/inicio';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Post from '../pages/post'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#002185', tabBarStyle: { position: 'absolute', height: 40 } }}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ color }) => { return <Feather name='home' size={25} color={color} /> } }} />
            <Tab.Screen name="Search" component={Search} options={{ headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ color }) => { return <Feather name='search' size={25} color={color} /> } }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ color }) => { return <Feather name='user' size={25} color={color} /> } }} />
        </Tab.Navigator>
    )
}

export default function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Inicio'>
                <Stack.Screen name="Post" component={Post} />
                <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}





