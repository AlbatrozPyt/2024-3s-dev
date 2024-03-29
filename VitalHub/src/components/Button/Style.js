import styled, { css } from "styled-components";


export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    background-color: #496BBA;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 5px;
    margin-top: 30px;
    margin-bottom: 20px;
    border: 2px solid #496BBA;
`

export const ButtonExitApp = styled(Button)`
    width: 189px;
    background-color: ACABB7;
`

export const ButtonGoogle = styled(Button)`
    background-color: white;
    border: 2px solid #496BBA;
    flex-direction: row;
    gap: 30px;
`

export const ButtonExit = styled(Button)`
    width: 189px;
    background-color: #ACABB7;
    border: 1px solid #ACABB7;
`

// CheckBox
export const CheckBox = styled.TouchableHighlight.attrs({
    underlayColor: "transparent"
})`
    width: 88px;
    height: 40px;
    border: 2px solid #49B3BA;
    border-radius: 5px;
    margin-top: 15px;
    padding: 5px;
    ${props => props.clickButton
        ? css`background-color: #49B3BA;`
        : css`background-color: #fff;`
    }
`

// Enviar Imagem
export const ButtonEnviarImagem = styled.TouchableOpacity`
    background: #49B3BA;
    width: 174px;
    height: 44px;
    margin-top: 10px;
    margin-bottom: 19px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

// Button esqueceu a senha
export const ButtonForgotPassword = styled.TouchableOpacity`
    width: 90%;
`