import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  useEffect(() => {
    console.warn(`Contador Atualizado !!!, Contador = ${count}`)
  }, [count])

  const [count, setCount] = useState(0);

  const increment = () => { 
    setCount(count + 1);
  }

  const decrement = () => { 
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {count}</Text>
 
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.textButton1}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.textButton2}>-</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 50,
    height: 45,
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    gap: 40,
    width: 250
  },
  textButton1: {
    fontSize: 40,
    color: "yellowgreen"
  },
  textButton2: {
    fontSize: 40,
    color: "red",
  },
  text: {
    fontSize: 50,
    color: "white"
  }
});
