import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from "./src/components/Person"

export default function App() {
  return (
    <SafeAreaView>

      <Person
        name="Vinicius"
        age={20}
      />

      <Person
        name="Matheus"
        age={16}
      />

      <Person
        name="Carlos"
        age={37}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
