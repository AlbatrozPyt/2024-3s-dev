import { StatusBar } from "react-native";
import { Container } from "../../components/Container/Style";
import { LinearGradient } from "expo-linear-gradient";
import {
  BoxTitleHeader,
  BoxView,
  HeaderContainer,
  HeaderContent,
  Notification,
  SubTitleHeader,
  TitleHeader,
} from "../../components/Header/Style";
import { ImagePerfil } from "../../components/ImagePerfil/Style";
import {
  BoxConsultasText,
  BoxSituacao,
  CardConsulta,
  CardSubTitle,
  CardTitle,
  ContainerConsultas,
  ContentSituacao,
  Horario,
  ImageConsulta,
  ModalButton,
  TextCancel,
  TitleSituacao,
} from "../../components/Consultas/Style";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { ButtonAgendar, ContainerButtonAgendar } from "../../components/ButtonIcons/Style";
import { ModalCancelar } from "../../components/Modals/Index";
import { useState } from "react";
import { Calendar } from "../../components/Calendar/Index";
import { Situacao } from "../../components/Consultas/Index"
import { Header } from "../../components/Header/Index";
import { Cards } from "../../components/Cards/Index";


export const PacienteConsulta = () => {
  const [showCancelar, setShowCancelar] = useState(false);

  return (
    <Container>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />

      <Header/>

      <Calendar />

      <Situacao/>

      <Cards/>

      <ContainerButtonAgendar>
        <ButtonAgendar source={require("../../assets/Agendar.png")} />
      </ContainerButtonAgendar>

      {showCancelar ? (<ModalCancelar />) : null}
    </Container>
  );
};
