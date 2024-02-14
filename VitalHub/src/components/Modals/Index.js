import { ButtonTitle, SimpleText, Title } from "../Title/Style";
import { Button } from "../Button/Style";
import { CheckBox, Input } from "../Input/Style";
import {
  BoxModalAgendar,
  BoxModalCancelar,
  BoxModalProntuario,
  ImagePaciente,
  ModalBackground,
  TextAgendar,
  TextModalProntuario,
} from "./Style";
import { LinkAccount } from "../ContextAccout/Style";
import { ContainerCheck, ContainerInputProntuario } from "../Container/Style";
import { TextInput } from "react-native";

// Modal de cancelamento
export const ModalCancelar = () => {
  return (
    <ModalBackground>
      <BoxModalCancelar>
        <Title>Cancelar consulta</Title>

        <SimpleText>
          Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu
          horário, deseja mesmo cancelar essa consulta?
        </SimpleText>

        <Button>
          <ButtonTitle>confirmar</ButtonTitle>
        </Button>

        <LinkAccount style={{ marginTop: 0 }}>Cancelar</LinkAccount>
      </BoxModalCancelar>
    </ModalBackground>
  );
};

// Modal de inserir prontuario
export const ModalProntuario = () => {
  return (
    <ModalBackground>
      <BoxModalProntuario>
        <ImagePaciente
          source={require("../../../assets/PacienteProntuario.png")}
        />

        <Title> Niccole Sarga</Title>

        <TextModalProntuario>
          22 anos niccole.sarga@gmail.com
        </TextModalProntuario>

        <Button>
          <ButtonTitle>inserir prontuário</ButtonTitle>
        </Button>

        <LinkAccount>Cancelar</LinkAccount>
      </BoxModalProntuario>
    </ModalBackground>
  );
};

// Modal de agendamento da consulta
export const ModalAgendarConsulta = () => {
  return (
    <ModalBackground>
      <BoxModalAgendar>
        <ContainerInputProntuario>
          <TextAgendar>Informe o tipo de consulta</TextAgendar>
          <Input placeholder="Tipo de consulta" />
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <TextAgendar>Qual o nível da consulta</TextAgendar>
          <ContainerCheck>
            <CheckBox placeholder="Rotina" />
            <CheckBox placeholder="Exame" />
            <CheckBox placeholder="Urgência" />
          </ContainerCheck>
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <TextAgendar>Informe a localização desejada</TextAgendar>
          <Input placeholder="Informe a localização" />
        </ContainerInputProntuario>

        <Button>
          <ButtonTitle>continuar</ButtonTitle>
        </Button>

        <LinkAccount>Cancelar</LinkAccount>
      </BoxModalAgendar>
    </ModalBackground>
  );
};

// Modal de ver local da consulta
export const ModalConsulta = () => {
  return (
    <ModalBackground>
      <BoxModalProntuario>
        <ImagePaciente source={require("../../assets/ClaudioLarge.png")} />

        <Title>Dr. Claudio</Title>
        
        <TextModalProntuario>Cliníco geral  CRM-15286</TextModalProntuario>
      </BoxModalProntuario>
    </ModalBackground>
  );
};
