import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

// components
import { Container } from './src/components/Container/Container';
import { ButtonArea } from './src/components/Container/Container';
import { Title } from './src/components/Title/Title';
import { ButtonAdd } from './src/components/Button/Button';
import { BtnIncrement } from './src/components/Image/Image';
import { BtnDecrement } from './src/components/Image/Image';
import { BackgroundText } from './src/components/Image/Image';
import { Reset } from './src/components/Title/Title';

export default function App() {
  useEffect(() => {
    console.warn(`Contador Atualizado !!!, Contador = ${count}`)
  }, [count])

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    count > 0 ?  setCount(count - 1) : setCount(0);
    count == 0 ? alert("NÃO SE PODE SUBTRAIR 0 !!!") : null;
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <Container source={require("./assets/high-tec.jpg")}>
      <BackgroundText source={require("./assets/balloon.png")}>
        <Title>{count}</Title>
      </BackgroundText>



      <ButtonArea>
        <ButtonAdd onPress={decrement}>
          <BtnDecrement
            source={require("./assets/menos.png")}
          />
          {/* <Text style={styles.textButton2}> - </Text> */}
        </ButtonAdd>



        <Reset onPress={reset}>RESET</Reset>

        <ButtonAdd onPress={increment}>
          <BtnIncrement
            source={require("./assets/mais.png")}
          />
          {/* <Text style={styles.textButton1}>+</Text> */}
        </ButtonAdd>
        <StatusBar style="auto" />
      </ButtonArea>
    </Container>
  );
}
