import { StatusBar } from "react-native";
import { Container } from "../../components/Container/Style";
import { ButtonAgendar, ContainerButtonAgendar } from "../../components/ButtonIcons/Style";
import { ModalAgendarConsulta } from "../../components/Modals/Index";
import { useState } from "react";
import { CalendarRow } from "../../components/Calendar/Index";
import { Situacao } from "../../components/Consultas/Index"
import { Header } from "../../components/Header/Index";
import { Cards } from "../../components/Cards/Index";
import { Calendar } from "react-native-calendars";


export const PacienteConsulta = () => {
  const [showAgendar, setShowAgendar] = useState(false);
  const [state, setState] = useState();
  return (
    <Container>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />

      <Header />

      <Calendar />

      <Situacao situacao={state} setSituacao={setState} />

      <Cards situacao={state} />

      <ContainerButtonAgendar onPress={() => {setShowAgendar(true)}}>
        <ButtonAgendar source={require("../../assets/Agendar.png")} />
      </ContainerButtonAgendar>

      {
        showAgendar ? 
          <ModalAgendarConsulta 
            setModal={setShowAgendar}
          /> 
        : null
      }
    </Container>
  );
};
