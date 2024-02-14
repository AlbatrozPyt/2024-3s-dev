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
  BoxDay,
  ContainerData,
  ContentData,
  Day,
  DayWeek,
  MonthAndYear,
} from "../../components/ContainerData/Style";
import {
  BoxConsultasText,
  BoxSituacao,
  CardConsulta,
  CardSubTitle,
  CardTitle,
  ContainerConsultas,
  ContentSituacao,
  Horario,
  HorarioRealizado,
  ImageConsulta,
  ModalButton,
  TextCancel,
  TitleSituacao,
} from "../../components/Consultas/Style";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { ButtonAgendar, ContainerButtonAgendar } from "../../components/ButtonIcons/Style";
import { ModalAgendarConsulta, ModalCancelar } from "../../components/Modals/Index";
import { useState } from "react";


export const PacienteConsulta = () => {
    const [showCancelar, setShowCancelar] = useState(false);

  return (
    <Container>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />

      <HeaderContainer>
        <LinearGradient
          colors={["#60BFC5", "#496BBA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <HeaderContent>
          <BoxView>
            <ImagePerfil source={require("../../assets/MiniKosta.png")} />

            <BoxTitleHeader>
              <SubTitleHeader>Bem Vindo</SubTitleHeader>
              <TitleHeader>Richard Kosta</TitleHeader>
            </BoxTitleHeader>
          </BoxView>

          <Notification source={require("../../assets/Sino.png")} />
        </HeaderContent>
      </HeaderContainer>

      <ContentData>
        <ContainerData>
          <MonthAndYear>Novembro 2023</MonthAndYear>

          <BoxDay>
            <DayWeek>Dom</DayWeek>
            <Day>01</Day>
          </BoxDay>

          <BoxDay>
            <DayWeek>Seg</DayWeek>
            <Day>02</Day>
          </BoxDay>

          <BoxDay>
            <DayWeek>Ter</DayWeek>
            <Day>03</Day>
          </BoxDay>

          <BoxDay>
            <DayWeek>Qua</DayWeek>
            <Day>04</Day>
          </BoxDay>

          <BoxDay>
            <DayWeek>Qui</DayWeek>
            <Day>05</Day>
          </BoxDay>

          <BoxDay>
            <DayWeek>Sex</DayWeek>
            <Day>06</Day>
          </BoxDay>

          <BoxDay>
            <DayWeek>Sab</DayWeek>
            <Day>07</Day>
          </BoxDay>
        </ContainerData>
      </ContentData>

      <ContentSituacao>
        <BoxSituacao>
          <TitleSituacao>Agendadas</TitleSituacao>
        </BoxSituacao>

        <BoxSituacao>
          <TitleSituacao>Realizadas</TitleSituacao>
        </BoxSituacao>

        <BoxSituacao>
          <TitleSituacao>Canceladas</TitleSituacao>
        </BoxSituacao>
      </ContentSituacao>

      <ContainerConsultas>
        <CardConsulta>
          <ImageConsulta source={require("../../assets/Claudio.png")} />

          <BoxConsultasText>
            <CardTitle>Dr. Claudio</CardTitle>
            <CardSubTitle>22 anos . Rotina</CardSubTitle>
            <Horario>
              <AntDesign
                name="clockcircle"
                size={14}
                color="#49B3BA"
              /> 14:00
            </Horario>
          </BoxConsultasText>

          <ModalButton
            onPress={() => {setShowCancelar(true)}}
          >
            <TextCancel>Cancelar</TextCancel>
          </ModalButton>
        </CardConsulta>
      </ContainerConsultas>

      <ContainerButtonAgendar>
        <ButtonAgendar source={require("../../assets/Agendar.png")} />
      </ContainerButtonAgendar>

      {showCancelar ? (<ModalCancelar/>) : null}
    </Container>
  );
};
