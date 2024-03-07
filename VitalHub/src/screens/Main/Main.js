import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MedicoConsultas } from "../MedicoConsultas/MedicoConsultas";
import { Perfil } from "../Perfil/Perfil";
import { FontAwesome6 } from '@expo/vector-icons';
import { Text, View } from "react-native";
import { Quicksand_500Medium } from "@expo-google-fonts/quicksand";
import { ContainerIcons, TextTabBottom } from "./Style";
import { useState } from "react";
import { ButtonAgendar, ContainerButtonAgendar } from "../../components/ButtonIcons/Style";

export const Main = () => {
    const Tab = createBottomTabNavigator();


    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"

                screenOptions={({ route, iconName, color, text, background }) => ({
                    tabBarStyle: {
                        backgroundColor: 'white'
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        if (route.name === "Home") {
                            iconName = 'calendar-check'
                            color = focused ? "#607EC5" : "#4E4B59"
                            background = focused ? "#ECF2FF" : "white"
                            text = focused ? "Home" : ""
                        } else if (route.name === 'Perfil') {
                            iconName = 'user-large'
                            color = focused ? "#607EC5" : "#4E4B59"
                            background = focused ? "#ECF2FF" : "white"
                            text = focused ? "Perfil" : ""
                        }

                        // You can return any component that you like here!
                        return (
                            <ContainerIcons style={{ backgroundColor: background }}>
                                <FontAwesome6 name={iconName} size={18} color={color} />
                                <TextTabBottom style={{ color: color }}>{text}</TextTabBottom>
                            </ContainerIcons>
                        )
                    },
                    tabBarActiveTintColor: "#607EC5",
                    headerShown: false
                })}
            >
                <Tab.Screen name="Home" component={MedicoConsultas} />
                <Tab.Screen name="Perfil" component={Perfil} />
            </Tab.Navigator>

        </>
    )
}