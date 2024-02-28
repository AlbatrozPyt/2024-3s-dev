import { Button } from "../Button/Style"
import { CalendarComponent } from "../CalendarComponent/Index"
import { Container, ContainerInputProntuario } from "../Container/Style"
import { LinkAccount } from "../ContextAccout/Style"
import InputSelect from "../PickerSelect/Index"
import { ButtonTitle, Label, Title } from "../Title/Style"

export const SelecionarData = () => {
  return (
    <Container>
      <Title>Selecionar Data</Title>

      <CalendarComponent/>

      <ContainerInputProntuario style={{width: `80%`,}}>
        <Label>Selecione um horário disponível</Label>
        <InputSelect/>
      </ContainerInputProntuario>

      <Button>
        <ButtonTitle>confirmar</ButtonTitle>
      </Button>

      <LinkAccount>cancelar</LinkAccount>
    </Container>
  )
}

