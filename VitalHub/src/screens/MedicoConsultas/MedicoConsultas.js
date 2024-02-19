import { StatusBar, View } from "react-native";
import { Container } from "../../components/Container/Style";

import { Calendar } from "../../components/Calendar/Index";
import { Situacao } from "../../components/Consultas/Index";
import { Header } from "../../components/Header/Index";
import { Footer } from "../../components/MenuFooter/Index";
import { Cards } from "../../components/Cards/Index";

export const MedicoConsultas = ({ navigation }) => {


  return (
    <Container>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />

      <Header />

      <Calendar />

      <Situacao />

      <Cards/>

      <Footer />
    </Container>
  );
};
