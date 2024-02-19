import styled from "styled-components";
import { BoxTitleHeader, SubTitleHeader } from "../Header/Style";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fafafa;
`;

export const ContainerScroll = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: #fafafa;
`;

// Container input prontuario
export const ContainerInputProntuario = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;

// Container Checkbox
export const ContainerCheck = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Container Flutuante
export const ContainerFloating = styled.View.attrs({
  shadowColor: "blue",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 3,
})`
  width: 80%;
  height: 100px;
  background-color: white;
  position: relative;
  bottom: 60px;
  align-items: center;
`;

// Container Input Padrão
export const ContainerInput = styled(ContainerInputProntuario)`
  align-items: start;
  align-self: center;
  width: 90%;
`
// Container MultiInputs
export const ContainerMultiInput = styled(ContainerCheck)`
  justify-content: space-between;
  align-self: center;
`
// Container da dos card selecionar clinica
export const ContainerSelecionarClinica = styled(ContainerScroll)`
  width: 90%;
`
// Container de dentro do scroll
export const ContainerInternoScroll = styled.View`
  width: 100%;
  align-items: center;
`

export const ContainerTopicoAgendamento = styled.View`
  align-items: start;
  width: 90%;
  height: fit-content;
`

// Box do card selecionar clinica
export const BoxInverse = styled(BoxTitleHeader)`
  align-items: end;
  padding: 0;
`
