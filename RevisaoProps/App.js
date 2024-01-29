import { FlatList, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import Person from "./src/components/Person/Person";
import Jogo from "./src/components/Jogo/Jogo"

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const gameList = [
    {id:1, nome: "Dark Souls II", genero: "Souls Like", estudio: "From Software", dataLancamento: "14/03/2014"},
    {id:2, nome: "Elden Ring", genero: "Souls Like", estudio: "From Software", dataLancamento: "25/02/2022"},
    {id:3, nome: "Cuphead", genero: "Run and Gun", estudio: "Studio MDHR", dataLancamento: "29/09/2017"},
    {id:4, nome: "Far Cry 3", genero: "FPS", estudio: "Ubisoft", dataLancamento: "29/09/2012"},
  ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
         data={gameList}
         keyExtractor={(item) => item.id}
         renderItem={({item}) => 
         <Jogo 
            nome={item.nome}
            genero={item.genero}
            estudio={item.estudio}
            dataLancamento={item.dataLancamento}
          />
      }
      />

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333131',
  },
});
