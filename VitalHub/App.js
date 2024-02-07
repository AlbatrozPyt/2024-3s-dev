import { NavigationContainer } from '@react-navigation/native';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';


export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsloaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

