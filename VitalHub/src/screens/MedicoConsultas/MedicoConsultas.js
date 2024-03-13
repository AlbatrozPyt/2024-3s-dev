import { StatusBar, Text, View } from "react-native";
import { Container } from "../../components/Container/Style";
import { Situacao } from "../../components/Consultas/Index";
import { Header } from "../../components/Header/Index";
import { Cards } from "../../components/Cards/Index";
import { LocalConsulta, ModalAgendarConsulta } from "../../components/Modals/Index";
import { Calendar } from "../../components/Calendar/Index"
import { useState } from "react";
import { ButtonAgendar, ContainerButtonAgendar } from "../../components/ButtonIcons/Style";

export const MedicoConsultas = ({ navigation }) => {

  const [situacao, setSituacao] = useState();
  const [modalView, setModalView] = useState();
  const [modalCancel, setModalCancel] = useState();
  const [modalAgendar, setModaAgendar] = useState(false);
  const [paciente, setPaciente] = useState();

  const [userRole, setUserRole] = useState('paciente');




  return (
    <Container>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent={true} />

      <Header />

      <Calendar />

      <Situacao situacao={situacao} setSituacao={setSituacao} />

      <Cards
        setPaciente={setPaciente}
        setModalView={setModalView}
        setModalCancel={setModalCancel}
        situacao={situacao}
        navigation={navigation}
      />  

      {
        userRole === 'paciente' ? (
          <ContainerButtonAgendar onPress={() => setModaAgendar(true)}>
            <ButtonAgendar source={require("../../assets/Agendar.png")} />
          </ContainerButtonAgendar>
        ) : null
      }

      {
        modalAgendar ? (
          <ModalAgendarConsulta  navigation={navigation} />
        ) : null
      }


    </Container>
  );
};
