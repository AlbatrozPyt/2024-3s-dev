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
  ModalCancelar,
  ModalConsulta,
  ModalProntuario,
} from "./src/components/Modals/Index.js";
import {
  EditarProntuario,
  ProntuarioMedico,
} from "./src/screens/ProntuarioMedico/ProntuarioMedico.js";
import { PacienteConsulta } from "./src/screens/PacienteConsulta/PacienteConsulta.js";
import { Perfil } from "./src/screens/Perfil/Perfil.js";

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

  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          name="Modal Prontuario"
          component={ModalProntuario}
          options={{ title: "Modal Prontuario" }}
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
          name="ModalConsulta"
          component={ModalConsulta}
          options={{ title: "ModalConsulta" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
