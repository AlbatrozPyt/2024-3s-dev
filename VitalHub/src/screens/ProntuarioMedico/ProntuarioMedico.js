import {
  Container,
  ContainerInputProntuario,
  ContainerScroll,
} from "../../components/Container/Style";
import { TextModalProntuario } from "../../components/Modals/Style";
import {
  ButtonTitle,
  Label,
  SimpleText,
  Title,
} from "../../components/Title/Style";
import {
  Input,
  InputDisabled,
  InputLarge,
  InputLargeDisabled,
} from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { LinkAccount } from "../../components/ContextAccout/Style";
import { ImageLarge } from "../../components/Image/Style";
import { ButtonCancel } from "../../components/Button/Index";

export const ProntuarioMedico = () => {
  return (
    <ContainerScroll>
      <Container>
        <ImageLarge source={require("../../assets/KostaLarge.png")} />

        <Title>Richard Kosta</Title>

        <TextModalProntuario>
          28 anos richard.kosta@gmail.com
        </TextModalProntuario>

        <ContainerInputProntuario>
          <Label>Descrição da consulta</Label>
          <InputLarge placeholder="Descrição" />
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <Label>Diagnóstico do paciente</Label>
          <Input placeholder="Diagnóstico" />
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <Label>Prescrição médica</Label>
          <InputLarge placeholder="Prescrição médica" />
        </ContainerInputProntuario>

        <Button>
          <ButtonTitle>salvar</ButtonTitle>
        </Button>

        <ButtonCancel setModal={false}/>
      </Container>
    </ContainerScroll>
  );
};

export const EditarProntuario = () => {
  return (
    <ContainerScroll>
      <Container>
        <ImageLarge source={require("../../assets/KostaLarge.png")} />

        <Title>Richard Kosta</Title>

        <TextModalProntuario>
          28 anos richard.kosta@gmail.com
        </TextModalProntuario>

        <ContainerInputProntuario>
          <Label>Descrição da consulta</Label>
          <InputLargeDisabled
            placeholder="Descrição"
            editable={false}
          />
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <Label>Diagnóstico do paciente</Label>
          <InputDisabled placeholder="Diagnóstico" editable={false} />
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <Label>Prescrição médica</Label>
          <InputLargeDisabled placeholder="Prescrição médica" editable={false} />
        </ContainerInputProntuario>

        <Button>
          <ButtonTitle>salvar</ButtonTitle>
        </Button>

        <Button>
          <ButtonTitle>editar</ButtonTitle>
        </Button>

        <LinkAccount>Cancelar</LinkAccount>
      </Container>
    </ContainerScroll>
  );
};
