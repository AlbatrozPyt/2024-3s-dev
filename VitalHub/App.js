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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import { FontAwesome6 } from "@expo/vector-icons";

export default function App() {
  const Stack = createNativeStackNavigator();

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

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{ title: "Navegação" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="Recuperar Senha"
          component={RecuperarSenha}
          options={{ title: "Recuperar Senha" }}
        />

        <Stack.Screen
          name="Verificar o Email"
          component={VerificarEmail}
          options={{ title: "Verificar o email" }}
        />

        <Stack.Screen
          name="Redefinir Senha"
          component={RedefinirSenha}
          options={{ title: "Redefinir Senha" }}
        />

        <Stack.Screen
          name="Criar Conta"
          component={CriarConta}
          options={{ title: "Criar Conta" }}
        />

        <Stack.Screen
          name="ConsultasMedico"
          component={MedicoConsultas}
          options={{ title: "Consultas Medico" }}
        />

        <Stack.Screen
          name="ConsultasPaciente"
          component={PacienteConsulta}
          options={{ title: "Consultas Paciente" }}
        />

        <Stack.Screen
          name="Prontuario"
          component={ProntuarioMedico}
          options={{ title: "Prontuario" }}
        />

        <Stack.Screen
          name="EditarProntuario"
          component={EditarProntuario}
          options={{ title: "Editar Prontuario" }}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}
        />

        <Stack.Screen
          name="SelecionarClinica"
          component={SelecionarClinica}
          options={{ title: "SelecionarClinica" }}
        />

        <Stack.Screen
          name="SelecionarMedico"
          component={SelecionarMedico}
          options={{ title: "SelecionarMedico" }}
        />

        <Stack.Screen
          name="Visualizar prescricao"
          component={VisualizarPrescricao}
          options={{ title: "Visualizar prescricao" }}
        />

        <Stack.Screen
          name="SelecionarData"
          component={SelecionarData}
          options={{ title: "SelecionarData" }}
        />
      </Stack.Navigator> */}

      <Tab.Navigator
        screenOptions={({ route, iconName, color="#4E4B59" }) => ({
          tabBarIcon: ({ focused }) => {
           
            if (route.name === "Agenda") {
              iconName = 'calendar-check';
              color="#607EC5";
            } else if (route.name === 'Perfil') {
              iconName = 'user-large'
              color="#607EC5";
            }

            // You can return any component that you like here!
            return <FontAwesome6 name={iconName} size={18} color={color} />;
          }
        })}
      >
        <Tab.Screen name="Agenda" component={MedicoConsultas} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
