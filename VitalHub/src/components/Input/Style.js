import styled, { css } from "styled-components";

// Input Padrao
export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#49B3BA"
})`
    width: 90%;
    height: 53px;
    border: 2px solid #49B3BA;
    border-radius: 5px;
    margin-top: 15px;
    padding: 16px;
    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
`
// Input Maior
export const InputLarge = styled(Input)`
    padding-top: 2px;
    height: 121px;
`

// Caixa do input de codigo
export const BoxCodeInput = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

// Input de codigo
export const CodeInput = styled(Input)`
    width: 65px;
    height: 62px;
    font-size: 40px;
    font-family: "Quicksand_600SemiBold";
    text-align: center;
    padding: 0;
    color: #49B3BA;
    padding-bottom: 5px;
`

// Inputs Desativados
export const InputDisabled = styled(Input).attrs({
    placeholderTextColor: "#4E4B59"
})`
    border: 1px solid #F5F3F3;
    background-color: #F5F3F3;
`
export const InputLargeDisabled = styled(InputLarge).attrs({
    placeholderTextColor: "#4E4B59"
})`
    border: 1px solid #F5F3F3;
    background-color: #F5F3F3;
    text-align: justify;
`
export const InputSmallDisabled = styled(InputDisabled)`
    width: 144px;
`