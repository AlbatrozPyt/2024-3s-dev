import styled from "styled-components";

// Titulo principal
export const Title = styled.Text `
    font-size: 20px;
    font-family: "MontserratAlternates_600SemiBold";
    margin-top: 30px;
`

// Texto Padrao
export const SimpleText = styled.Text`
    font-size: 16px;
    font-family: "Quicksand_500Medium";
    width: 90%;
    text-align: center;
    margin-top: 15px;
`

// Texto do botao padrao
export const ButtonTitle = styled.Text`
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    color: white;
    text-transform: uppercase;
`

// Texto do botao Google
export const ButtonTitleGoogle = styled(ButtonTitle)`
    font-family: "MontserratAlternates_600SemiBold";
    color: #496BBA;
    padding-right: 49px;
`

// Texto de email
export const UserEmail = styled( SimpleText )`
    color: #496BBA;
`

// Label
export const Label = styled(SimpleText)`
    text-align: left;
`

