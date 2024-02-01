import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './style';
import { Header } from './src/components/Header';
import { Form } from './src/components/Form';

export default function App() {

  let [fontLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })

  return (
    <ContainerApp>
      <StatusBar  backgroundColor={"transparent"} translucent />

      <Header/>    

      <Form/>

    </ContainerApp>
  );
}
