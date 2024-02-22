import { ButtonTitle, SimpleText, TextCheckbox, TextSemiBold, Title } from "../Title/Style";
import { Button, CheckBox } from "../Button/Style";
import { Input } from "../Input/Style";
import {
  BoxModalAgendamento,
  BoxModalAgendar,
  BoxModalCancelar,
  BoxModalProntuario,
  DadosAgedamento,
  ImagePaciente,
  ModalBackground,
  TextAgendar,
  TextModalProntuario,
} from "./Style";
import { LinkAccount } from "../ContextAccout/Style";
import { Container, ContainerCheck, ContainerInputProntuario, ContainerTopicoAgendamento } from "../Container/Style";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { BoxConsultasText } from "../Consultas/Style";
import { BoxTitleHeader, SubTitleHeader } from "../Header/Style";
import { useState } from "react";
import { ButtonCancel } from "../Button/Index";

// Modal de cancelamento
export const ModalCancelar = ({ setModal }) => {
  return (
    <ModalBackground showModal={setModal}>
      <BoxModalCancelar>
        <Title>Cancelar consulta</Title>

        <SimpleText>
          Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu
          horário, deseja mesmo cancelar essa consulta?
        </SimpleText>

        <Button>
          <ButtonTitle>confirmar</ButtonTitle>
        </Button>

        <ButtonCancel setModal={setModal}/>
      </BoxModalCancelar>
    </ModalBackground>
  );
};

// Modal de inserir prontuario
export const ModalProntuario = ({ setModal, name, age, email }) => {
  return (
    <ModalBackground>
      <BoxModalProntuario>
        <ImagePaciente
          source={require("../../assets/vinicius.png")}
        />

        <Title>{name}</Title>


        <TextModalProntuario>
          {age} · {email}
        </TextModalProntuario>

        <Button>
          <ButtonTitle>inserir prontuário</ButtonTitle>
        </Button>

        <ButtonCancel setModal={setModal}/>
      </BoxModalProntuario>
    </ModalBackground>
  );
};

// Modal de agendamento da consulta
export const ModalAgendarConsulta = ({setModal}) => {
  return (
    <ModalBackground>
      <BoxModalAgendar>
        <ContainerInputProntuario>
          <TextAgendar>Qual o nível da consulta</TextAgendar>
          <ContainerCheck>
            <CheckBox>
              <TextCheckbox>Rotina</TextCheckbox>
            </CheckBox>
            <CheckBox>
              <TextCheckbox>Exame</TextCheckbox>
            </CheckBox>
            <CheckBox>
              <TextCheckbox>Urgência</TextCheckbox>
            </CheckBox>
          </ContainerCheck>
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <TextAgendar>Informe a localização desejada</TextAgendar>
          <Input placeholder="Informe a localização" />
        </ContainerInputProntuario>

        <Button>
          <ButtonTitle>continuar</ButtonTitle>
        </Button>

        <ButtonCancel setModal={setModal}/>
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

export const ModalAgendamento = () => {
  return (
    <ModalBackground>
      <BoxModalAgendamento>
        <Title>Agendar consulta</Title>

        <SimpleText>
          Consulte os dados selecionados para a sua consulta
        </SimpleText>


        <ContainerTopicoAgendamento>
          <DadosAgedamento>
            <TextSemiBold>Data da consulta</TextSemiBold>
            <SubTitleHeader>1 de Novembro de 2023</SubTitleHeader>
          </DadosAgedamento>

          <DadosAgedamento>
            <TextSemiBold>Médico(a) da consulta</TextSemiBold>
            <SubTitleHeader>Dra Alessandra</SubTitleHeader>
            <SubTitleHeader>Demartologa, Esteticista</SubTitleHeader>
          </DadosAgedamento>

          <DadosAgedamento>
            <TextSemiBold>Local da consulta</TextSemiBold>
            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
          </DadosAgedamento>

          <DadosAgedamento>
            <TextSemiBold>Tipo da consulta</TextSemiBold>
            <SubTitleHeader>Rotina</SubTitleHeader>
          </DadosAgedamento>
        </ContainerTopicoAgendamento>


        <Button>
          <ButtonTitle>confirmar</ButtonTitle>
        </Button>

        <ButtonCancel/>
      </BoxModalAgendamento>

    </ModalBackground>
  )
}
