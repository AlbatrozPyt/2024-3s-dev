import { ButtonTitle, Label, SimpleText, TextCheckbox, TextSemiBold, Title } from "../Title/Style";
import { Button, CheckBox } from "../Button/Style";
import { Input, InputDisabled, InputLargeDisabled, InputSmallDisabled } from "../Input/Style";
import {
  BoxLocalizacao,
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
import { ContentAccount, LinkAccount } from "../ContextAccout/Style";
import { Container, ContainerCheck, ContainerInput, ContainerInputProntuario, ContainerMultiInput, ContainerTopicoAgendamento } from "../Container/Style";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { BoxConsultasText, CardButton } from "../Consultas/Style";
import { BoxTitleHeader, SubTitleHeader } from "../Header/Style";
import { useState } from "react";
import { ButtonCancel } from "../Button/Index";

// Modal de cancelamento
export const ModalCancelar = ({ navigation }) => {
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

        <ButtonCancel screen={`Main`} navigation={navigation} />
      </BoxModalCancelar>
    </ModalBackground>
  );
};

// Modal de inserir prontuario
export const ModalProntuario = ({ name = "user", age = "20 anos", email = "user@email.com", navigation }) => {
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


        <Button onPress={() => navigation.navigate('InserirProntuario')}>
          <ButtonTitle>inserir prontuário</ButtonTitle>
        </Button>

        <ButtonCancel navigation={navigation} screen={'Main'} />
      </BoxModalProntuario>
    </ModalBackground>
  );
};

// Modal de agendamento da consulta
export const ModalAgendarConsulta = ({ navigation }) => {
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

        <Button onPress={() => navigation.navigate("SelecionarClinica")}>
          <ButtonTitle>continuar</ButtonTitle>
        </Button>

        <ButtonCancel navigation={navigation}  screen={`Main`}/>
      </BoxModalAgendar>
    </ModalBackground>
  );
};

// Modal de ver local da consulta
export const ModalConsulta = () => {
  return (
    <ModalBackground>
      <BoxModalProntuario style={{ justifyContent: 'space-evenly' }}>
        <CardButton>
          <ImagePaciente source={require("../../assets/ClaudioLarge.png")} />

          <Title>Dr. Claudio</Title>

          <TextModalProntuario>Cliníco geral  CRM-15286</TextModalProntuario>

          <Button>
            <ButtonTitle>Ver local da consulta</ButtonTitle>
          </Button>

          <ContentAccount>
            <LinkAccount>cancelar</LinkAccount>
          </ContentAccount>
        </CardButton>
      </BoxModalProntuario>
    </ModalBackground>
  );
};

// Modal de visualizacao do agendamento
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

        <ButtonCancel />
      </BoxModalAgendamento>

    </ModalBackground>
  )
}

export const ModalLocalizacao = () => {
  return (
    <BoxLocalizacao>
      <Title>Clínica Natureh</Title>
      <TextModalProntuario>
        São Paulo, SP
      </TextModalProntuario>

      <ContainerInputProntuario>
        <Label>Endereço</Label>
        <InputDisabled editable={false} placeholder="Rua Vicenso Silva, 987" />
      </ContainerInputProntuario>

      <ContainerMultiInput>
        <ContainerInput style={{ width: "fit-content" }}>
          <Label>Número</Label>
          <InputSmallDisabled value="578" editable={false} />
        </ContainerInput>

        <ContainerInput style={{ width: "fit-content" }}>
          <Label>Bairro</Label>
          <InputSmallDisabled value="Moema-SP" editable={false} />
        </ContainerInput>
      </ContainerMultiInput>
    </BoxLocalizacao>
  )
}
