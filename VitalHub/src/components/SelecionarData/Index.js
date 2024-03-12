import { useState } from "react"
import { Button } from "../Button/Style"
import { CalendarComponent } from "../CalendarComponent/Index"
import { Container, ContainerInputProntuario } from "../Container/Style"
import { ContentAccount, LinkAccount } from "../ContextAccout/Style"
import InputSelect from "../PickerSelect/Index"
import { ButtonTitle, Label, Title } from "../Title/Style"
import { ModalAgendamento, ModalAgendarConsulta } from "../Modals/Index"

export const SelecionarData = ({ navigation }) => {
  const [modalAgendar, setModalAgendar] = useState(false);

  return (
    <>
      <Container>
        <Title>Selecionar Data</Title>

        <CalendarComponent />

        <ContainerInputProntuario style={{ width: `80%`, }}>
          <Label>Selecione um horário disponível</Label>
          <InputSelect />
        </ContainerInputProntuario>

        <Button onPress={() => setModalAgendar(true)}>
          <ButtonTitle>confirmar</ButtonTitle>
        </Button>

        <ContentAccount onPress={() => navigation.replace('Main')}>
          <LinkAccount>cancelar</LinkAccount>
        </ContentAccount>
      </Container>


      {
        modalAgendar ? (
          <ModalAgendamento navigation={navigation}/>
        ) : (
          null
        )
      }

    </>
  )
}

