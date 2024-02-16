import { StatusBar, View } from "react-native";
import {
  BoxTitleHeader,
  BoxView,
  HeaderContainer,
  HeaderContent,
  Notification,
  SubTitleHeader,
  TitleHeader,
} from "../../components/Header/Style";
import { LinearGradient } from "expo-linear-gradient";
import { ImagePerfil } from "../../components/ImagePerfil/Style";
import { Container } from "../../components/Container/Style";
import {
  MenuFooter,
  ContainerFooter,
  BoxButtonFooter,
  TextButtonFooter,
} from "../../components/MenuFooter/Style";
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
import { Calendar } from "../../components/Calendar/Index";

export const MedicoConsultas = ({ navigation }) => {
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
            <ImagePerfil source={require("../../assets/ImagemPerfil.png")} />

            <BoxTitleHeader>
              <SubTitleHeader>Bem Vindo</SubTitleHeader>
              <TitleHeader>Dr. Claudio</TitleHeader>
            </BoxTitleHeader>
          </BoxView>

          <Notification source={require("../../assets/Sino.png")} />
        </HeaderContent>
      </HeaderContainer>

      <Calendar/>

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
          <ImageConsulta source={require("../../assets/Nicolle.png")} />

          <BoxConsultasText>
            <CardTitle>Nicolle Sarga</CardTitle>
            <CardSubTitle>22 Idade · Rotina</CardSubTitle>
            <HorarioRealizado>
              {" "}
              <AntDesign
                name="clockcircle"
                size={14}
                color="#4E4B59"
              /> 14:00{" "}
            </HorarioRealizado>
          </BoxConsultasText>

          <ModalButton>
            <TextCancel>Cancelar</TextCancel>
          </ModalButton>
        </CardConsulta>
        <CardConsulta>
          <ImageConsulta source={require("../../assets/Kosta.png")} />

          <BoxConsultasText>
            <CardTitle>Richard Kosta</CardTitle>
            <CardSubTitle>28 Idade · Urgência</CardSubTitle>
            <Horario>
              {" "}
              <AntDesign
                name="clockcircle"
                size={14}
                color="#49B3BA"
              /> 15:00{" "}
            </Horario>
          </BoxConsultasText>

          <ModalButton>
            <TextCancel>Cancelar</TextCancel>
          </ModalButton>
        </CardConsulta>
        <CardConsulta>
          <ImageConsulta source={require("../../assets/Nicolle.png")} />

          <BoxConsultasText>
            <CardTitle>Nicolle Sarga</CardTitle>
            <CardSubTitle>22 Idade . Rotina</CardSubTitle>
            <HorarioRealizado>
              {" "}
              <AntDesign
                name="clockcircle"
                size={14}
                color="#4E4B59"
              /> 14:00{" "}
            </HorarioRealizado>
          </BoxConsultasText>

          <ModalButton>
            <TextCancel>Cancelar</TextCancel>
          </ModalButton>
        </CardConsulta>
        <CardConsulta>
          <ImageConsulta source={require("../../assets/Kosta.png")} />

          <BoxConsultasText>
            <CardTitle>Richard Kosta</CardTitle>
            <CardSubTitle>28 Idade · Urgência</CardSubTitle>
            <Horario>
              {" "}
              <AntDesign
                name="clockcircle"
                size={14}
                color="#49B3BA"
              /> 15:00{" "}
            </Horario>
          </BoxConsultasText>

          <ModalButton>
            <TextCancel>Cancelar</TextCancel>
          </ModalButton>
        </CardConsulta>
      </ContainerConsultas>

      <MenuFooter>
        <ContainerFooter>
          <BoxButtonFooter>
            <FontAwesome6 name="calendar-check" size={18} color="#4E4B59" />
            <TextButtonFooter>Agenda</TextButtonFooter>
          </BoxButtonFooter>

          <BoxButtonFooter>
            <FontAwesome6 name="hospital" size={18} color="#4E4B59" />
            <TextButtonFooter>Clínicas</TextButtonFooter>
          </BoxButtonFooter>

          <BoxButtonFooter>
            <FontAwesome6 name="user-large" size={18} color="#4E4B59" />
            <TextButtonFooter>Perfil</TextButtonFooter>
          </BoxButtonFooter>
        </ContainerFooter>
      </MenuFooter>
    </Container>
  );
};
