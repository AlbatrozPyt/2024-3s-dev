import { NavigationContainer } from '@react-navigation/native';
import { useFonts, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';


export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsloaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

