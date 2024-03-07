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
import { ModalAgendamento, ModalProntuario } from "./src/components/Modals/Index.js";
import { Main } from "./src/screens/Main/Main.js";

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

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="login" component={Login} />

        <Stack.Screen name="Main" component={Main} />

        <Stack.Screen name="Selecionar" component={SelecionarClinica} />

        <Stack.Screen name="criar conta" component={CriarConta} />

        <Stack.Screen name="MedicoConsultas" component={MedicoConsultas} />

        <Stack.Screen name="InserirProntuario" component={ProntuarioMedico} />

        <Stack.Screen name="ModalVerProntuario" component={ModalProntuario}/>

        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>

        <Stack.Screen name="VerificarEmail" component={VerificarEmail} />

        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />

        <Stack.Screen name="VisualizarPrescricao" component={VisualizarPrescricao} />

        <Stack.Screen name="SelecionarClinica" component={SelecionarClinica} />

        <Stack.Screen name="SelecionarMedico" component={SelecionarMedico} />

        <Stack.Screen name="SelecionarData" component={SelecionarData} />\

        <Stack.Screen name="Agendamento" component={ModalAgendamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
