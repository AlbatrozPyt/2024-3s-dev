import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri:"https://th.bing.com/th?id=OIP.cDLaWCdJkKcLiIe-0iJYxAHaGH&w=110&h=110&c=7&rs=1&qlt=80&pcl=f9f9f9&o=6&cdv=1&dpr=1.3&pid=18.2"}}
      />

      <Text style={styles.text}>Hello</Text>
      
      <TextInput
        style={styles.input}
        placeholder='escreva aqui'
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "cyan",
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "cyan",
    borderRadius: "20px",
    padding: "10px"
  },
  image: {
    width: 200,
    height: 200
  }
});
