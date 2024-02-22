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

  const [situacao, setSituacao] = useState();
  const [modalView, setModalView] = useState();
  const [modalCancel, setModalCancel] = useState();
  const [paciente, setPaciente] = useState();

  return (
    <Container>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />

      <Header />

      <Calendar />

      <Situacao situacao={situacao} setSituacao={setSituacao} />

      <Cards setPaciente={setPaciente} setModalView={setModalView} setModalCancel={setModalCancel} situacao={situacao} />

      {/* Modal */}
      {
        modalView === true ?
          (
            <ModalProntuario
              image={paciente.image}
              name={paciente.name}
              age={paciente.age}
              email={paciente.email}
              setModal={setModalView}
            />
          ) : (null)
      }
      {
        modalCancel === true ?
          (
            <ModalCancelar
              setModal={setModalCancel}
            />
          ) : null
      }

      <Footer />
    </Container>
  );
};
