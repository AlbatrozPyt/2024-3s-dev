import { SubTitleHeader } from "../Header/Style";
import { ButtonCancel } from "../Button/Index";
import { ContentAccount, LinkAccount } from "../ContextAccout/Style";
import { Button, CheckBox } from "../Button/Style";
import { Input, InputDisabled, InputSmallDisabled } from "../Input/Style";

import * as Notifications from 'expo-notifications'

import { 
  ButtonTitle, 
  Label, 
  SimpleText, 
  TextCheckbox, 
  TextSemiBold, 
  Title 
} from "../Title/Style";

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

import { 
  ContainerCheck,
  ContainerInput, 
  ContainerInputProntuario, 
  ContainerMultiInput, 
  ContainerTopicoAgendamento 
} from "../Container/Style";
import { getPermissionsAsync } from "expo-media-library";


Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
 handleNotification: async () => ({
   shouldPlaySound: true,
   shouldShowAlert: true,
   shouldSetBadge: true,
 })
})

// Modal de cancelamento
export const ModalCancelar = ({ navigation }) => {

  const handleNotification = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== `granted`)
    {
      alert(`Notificacoes desativadas`)
      return
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Consulta cancelada`,
        body: `A sua consulta foi cancelada com sucesso.`,
      },
      trigger: null
    })
  }

  return (
    <ModalBackground>
      <BoxModalCancelar>
        <Title>Cancelar consulta</Title>

        <SimpleText>
          Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu
          horário, deseja mesmo cancelar essa consulta?
        </SimpleText>

        <Button onPress={() => {handleNotification(), navigation.replace(`Main`)}}>
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

        <ButtonCancel navigation={navigation} screen={`Main`} />
      </BoxModalAgendar>
    </ModalBackground>
  );
};

// Modal de visualizacao do agendamento
export const ModalAgendamento = ({ navigation }) => {
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


        <Button onPress={() => navigation.replace(`Main`)}>
          <ButtonTitle>confirmar</ButtonTitle>
        </Button>

        <ButtonCancel navigation={navigation} screen={'SelecionarData'} />
      </BoxModalAgendamento>

    </ModalBackground>
  )
}

export const ModalLocalizacao = ({navigation}) => {
  return (
    <BoxLocalizacao>
      <Title>Clínica Natureh</Title>
      <TextModalProntuario>
        São Paulo, SP
      </TextModalProntuario>

      <ContainerInputProntuario style={{marginTop:0}}>
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

      <ContentAccount onPress={() => navigation.replace(`Main`)}>
        <LinkAccount>
          voltar
        </LinkAccount>
      </ContentAccount>
    </BoxLocalizacao>
  )
}

// Modal Ver local da consulta
export const LocalConsulta = ({navigation}) => {
  return (
    <ModalBackground>
      <BoxModalProntuario>
          <ImagePaciente source={require("../../assets/ClaudioLarge.png")} />

          <Title>Dr. Claudio</Title>

          <TextModalProntuario>Cliníco geral  CRM-15286</TextModalProntuario>

          <Button onPress={() => navigation.replace(`Mapa`)}>
            <ButtonTitle>Ver local da consulta</ButtonTitle>
          </Button>

          <ContentAccount onPress={() => navigation.replace('Main')}>
            <LinkAccount>cancelar</LinkAccount>
          </ContentAccount>
      </BoxModalProntuario>
    </ModalBackground>
  )
}
