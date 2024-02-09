import styled from "styled-components";

// Situacao
export const ContentSituacao = styled.View`
    width: 90%;
    height: 39px;
    margin-top: 38px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const BoxSituacao = styled.View`
    width: 100px;
    height: 35px;
    border: 2px solid #496BBA;
    border-radius: 5px;
`
export const TitleSituacao = styled.Text`
    font-size: 12px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #496BBA;
    text-align: center;
    padding: 5px;
`

// Consultas
export const ContainerConsultas = styled.ScrollView`
    width: 90%;
    height: 100%;
    margin-top: 20px;
`
export const CardConsulta = styled.View`
    width: 100%;
    height: 102px;
    border-radius: 5px;
    background-color: white;    
    border: 2px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
` 
export const ImageConsulta = styled.Image`
    width: 77px;
    height: 80px;
    border-radius: 5px;
`
export const BoxConsultasText = styled.View`
    width: 160px;
    height: 100%;
    border: 2px solid;
    padding: 10px;
`
export const CardTitle = styled.Text`
    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
    border: 2px solid;
`
export const CardSubTitle = styled.Text`
    font-size: 14px;
    font-family: "Quicksand_600SemiBold";
    color: #8C8A97;
`
export const IconTime = styled.Image`
    width: 14px;
    height: 14px;
`
export const Horario = styled(CardSubTitle)`
    color: #49B3BA;
    background-color: #49B3BA;
    width: 100px;
`