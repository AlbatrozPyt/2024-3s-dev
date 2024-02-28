import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
} from "@expo-google-fonts/montserrat-alternates";
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Login } from "./src/screens/Login/Login";
import { RecuperarSenha } from "./src/screens/RecuperarSenha/RecuperarSenha";
import { VerificarEmail } from "./src/screens/VerificarEmail/VerificarEmail";
import { RedefinirSenha } from "./src/screens/RedefinirSenha/RedefinirSenha";
import { CriarConta } from "./src/screens/CriarConta/CriarConta";
import { MedicoConsultas } from "./src/screens/MedicoConsultas/MedicoConsultas";
import {
  EditarProntuario,
  ProntuarioMedico,
} from "./src/screens/ProntuarioMedico/ProntuarioMedico.js";
import { PacienteConsulta } from "./src/screens/PacienteConsulta/PacienteConsulta.js";
import { Perfil } from "./src/screens/Perfil/Perfil.js";
import { SelecionarClinica } from "./src/screens/SelecionarClinica/SelecionarClinica.js";
import { SelecionarMedico } from "./src/screens/SelecionarMedico/SelecionarMedico.js";
import { VisualizarPrescricao } from "./src/screens/VisualizarPrescricao/VisualizarPrescricao.js";
import CalendarComponent, { SelecionarData } from "./src/components/SelecionarData/Index.js"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";

export default function App() {

  const [fontsloaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
  });

  if (!fontsloaded && !fontsError) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Screen name="InserirProntuario" component={ProntuarioMedico} />
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
        <Tab.Screen name="InserirProntuario" component={ProntuarioMedico} options={{tabBarItemStyle: {display:"none"}}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
