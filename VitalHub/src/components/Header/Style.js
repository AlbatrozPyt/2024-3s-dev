import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

// Container do Header
export const HeaderContainer = styled.SafeAreaView`
    width: 100%;
    height: 144px;
    position: relative;
    top: 0;
    border-radius: 0 0 20px 20px;
    display: grid;
    align-items: center;
`
// Segura o conteudo do Header
export const HeaderContent = styled.View`
    width: 80%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
// Box para titulo e imagem
export const BoxView = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
`

// Box title header
export const BoxTitleHeader = styled.View`
    /* display: flex; */
    padding: 15px;
`

// Sub titulo principal
export const SubTitleHeader = styled.Text`
    font-size: 14px;
    font-family: Quicksand_500Medium;
    color: #4E4B59;
`

// Titulo Porincipal do header
export const TitleHeader = styled.Text`
    font-size: 16px;
    font-family: "Quicksand_600SemiBold";
    color: #FBFBFB;
`

// Notificacao
export const Notification = styled.Image `
    width: 25px;
    height: 25px;
`