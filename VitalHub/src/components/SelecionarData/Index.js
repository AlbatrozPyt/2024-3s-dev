import { Button } from "../Button/Style"
import { CalendarComponent } from "../CalendarComponent/Index"
import { Container, ContainerInputProntuario } from "../Container/Style"
import { ContentAccount, LinkAccount } from "../ContextAccout/Style"
import InputSelect from "../PickerSelect/Index"
import { ButtonTitle, Label, Title } from "../Title/Style"

export const SelecionarData = ({ navigation }) => {
  return (
    <Container>
      <Title>Selecionar Data</Title>

      <CalendarComponent />

      <ContainerInputProntuario style={{ width: `80%`, }}>
        <Label>Selecione um horário disponível</Label>
        <InputSelect />
      </ContainerInputProntuario>

      <Button onPress={() => navigation.navigate('Agendamento')}>
        <ButtonTitle>confirmar</ButtonTitle>
      </Button>

      <ContentAccount onPress={() => navigation.replace('Main')}>
        <LinkAccount>cancelar</LinkAccount>
      </ContentAccount>
    </Container>
  )
}

