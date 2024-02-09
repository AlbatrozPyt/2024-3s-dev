import { NavigationContainer } from '@react-navigation/native';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold} from '@expo-google-fonts/quicksand';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { CriarConta } from './src/screens/CriarConta/CriarConta';
import { MedicoConsultas } from './src/screens/MedicoConsultas/MedicoConsultas';


export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsloaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  })


  if (!fontsloaded && !fontsError) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Navegacao'
          component={Navegacao}
          options={{ title: "Navegação" }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen 
          name='Recuperar Senha'
          component={RecuperarSenha}
          options={{title: "Recuperar Senha"}}
        />

        <Stack.Screen
          name='Verificar o Email'
          component={VerificarEmail}
          options={{title: "Verificar o email"}}
        />

        <Stack.Screen
          name='Redefinir Senha'
          component={RedefinirSenha}
          options={{title: "Redefinir Senha"}}
        />

        <Stack.Screen
          name='Criar Conta'
          component={CriarConta}
          options={{title: "Criar Conta"}}
        />

        <Stack.Screen
          name='ConsultasMedico'
          component={MedicoConsultas}
          options={{title: "Consultas Medico"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

