import { StatusBar, Text, View } from "react-native";
import { Container } from "../../components/Container/Style";

import { Calendar } from "../../components/Calendar/Index";
import { Situacao } from "../../components/Consultas/Index";
import { Header } from "../../components/Header/Index";
import { Footer } from "../../components/MenuFooter/Index";
import { Cards } from "../../components/Cards/Index";
import { TitleHeader } from "../../components/Header/Style";
import { useContext, useState } from "react";
import { ModalCancelar, ModalProntuario } from "../../components/Modals/Index";

export const MedicoConsultas = ({ navigation }) => {

  const [state, setState] = useState();
  const [modal, setModal] = useState();
  const [paciente, setPaciente] = useState();

  return (
    <Container>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />

      <Header />

      <Calendar />

      <Situacao situacao={state} setSituacao={setState} />

      <Cards setPaciente={setPaciente} setModal={setModal} situacao={state} />

      {
        modal === true ?
          (
            <ModalProntuario
              image={paciente.image}
              name={paciente.name}
              age={paciente.age}
              email={paciente.email}
            />
          ) : null
      }

      <Footer />
    </Container>
  );
};
