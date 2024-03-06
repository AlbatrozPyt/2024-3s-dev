import styled, { css } from "styled-components";

// Situacao da consulta: agendada, realizada ou cancelada

// Segura os botões
export const ContentSituacao = styled.View`
  width: 90%;
  height: 39px;
  margin-top: 38px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
// Botão da situação
export const BoxSituacao = styled.TouchableHighlight.attrs({
  underlayColor: "transparent"
})`
  width: 100px;
  height: 35px;
  border: 2px solid #496bba;
  border-radius: 5px;

  /* validacao do botao */
  ${props => props.clickButton
    ? css`background-color: #496BBA;`
    : css`background-color: #fff;`
  }
`;

// Texto do botão
export const TitleSituacao = styled.Text`
  font-size: 12px;
  font-family: "MontserratAlternates_600SemiBold";
  text-align: center;
  padding: 5px;

  
  /* validacao do botao */
  ${props => props.clickButton
    ? css`color: #fff;`
    : css`color: #496bba;`
  }
`;

// Consultas

// Container de Scroll
export const ContainerConsultas = styled.ScrollView`
  width: 90%;
  height: 100%;
  margin-top: 20px;
`;


// Card da consulta
export const CardConsulta = styled.TouchableOpacity.attrs({
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 3,
})`
    width: 100%;
    height: 102px;
    border-radius: 5px;
    background-color: #ffffff;    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 12px;
    margin-bottom: 5px;
    padding: 5px;
`;

  

// Imagem do usuario no card
export const ImageConsulta = styled.Image`
  width: 77px;
  height: 80px;
  border-radius: 5px;
`;

// Coluna que segura os texto e a hora da consulta
export const BoxConsultasText = styled.View`
  height: 90%;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 40px;
`;
export const CardTitle = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
`;
export const CardSubTitle = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_600SemiBold";
  color: #8c8a97;
`;

// Hora da consulta
export const Horario = styled(CardSubTitle)`
  color: #49b3ba;
  background-color: #e8fcfd;
  width: 100px;
  height: 26px;
  border-radius: 5px;
  text-align: center;
`;
export const HorarioRealizado = styled(Horario)`
  background-color: #f1f0f5;
  color: #4e4b59;
`;

//Button Modal action
export const ModalButton = styled.TouchableOpacity`
  width: fit-content;
  height: fit-content;
  align-self: flex-end;
  margin-bottom: 15px;
`;
// Cancelar ou ver prontuario
export const TextCancel = styled.Text`
  font-size: 12px;
  font-family: "MontserratAlternates_500Medium";
  color: #f64f77;
  margin-left: 12px;
`;
export const TextVerProntuario = styled(TextCancel)`
  color: #344f8f;
`;
