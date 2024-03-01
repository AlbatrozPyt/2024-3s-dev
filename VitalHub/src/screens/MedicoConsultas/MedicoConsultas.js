import { StatusBar, Text, View } from "react-native";
import { Container } from "../../components/Container/Style";
import { Situacao } from "../../components/Consultas/Index";
import { Header } from "../../components/Header/Index";
import { Footer } from "../../components/MenuFooter/Index";
import { Cards } from "../../components/Cards/Index";
import { ModalCancelar, ModalProntuario } from "../../components/Modals/Index";
import { Calendar } from "../../components/Calendar/Index"
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ProntuarioMedico } from "../ProntuarioMedico/ProntuarioMedico";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Perfil } from "../Perfil/Perfil";

export const MedicoConsultas = ({ navigation }) => {

  const [situacao, setSituacao] = useState();
  const [modalView, setModalView] = useState();
  const [modalCancel, setModalCancel] = useState();
  const [paciente, setPaciente] = useState();

  const Tab = createBottomTabNavigator();

  return (
    <Container>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent={true} />

      <Header />

      <Calendar />

      <Situacao situacao={situacao} setSituacao={setSituacao} />

      <Cards
        setPaciente={setPaciente}
        setModalView={setModalView}
        setModalCancel={setModalCancel}
        situacao={situacao}
        navigation={navigation}
      />

      {/* Modal */}
      {
        modalCancel === true ?
          (
            <ModalCancelar
              setModal={setModalCancel}
            />
          ) : null
      }

      {/* <Footer /> */}

        <Tab.Navigator
          screenOptions={({ route, iconName, color }) => ({
            tabBarIcon: ({ focused }) => {

              if (route.name === "Agenda") {
                iconName = 'calendar-check';
                color = focused ? "#607EC5" : "#4E4B59"
              } else if (route.name === 'Perfil') {
                iconName = 'user-large'
                color = focused ? "#607EC5" : "#4E4B59"
              }

              // You can return any component that you like here!
              return <FontAwesome6 name={iconName} size={18} color={color} />;
            },
            tabBarActiveTintColor: "#607EC5",
            headerShown: false
          })}
        >
          <Tab.Screen name="Agenda" component={MedicoConsultas} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    </Container>
  );
};
