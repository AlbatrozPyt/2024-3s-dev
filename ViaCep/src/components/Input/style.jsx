import styled from "styled-components"

export const InputText = styled.TextInput `
    width: 100%;
    border: 2px solid #A1A1A1;
    border-radius: 15px;
    padding: 20px;
    margin-top: 10px;
    font-size: 18px;
    font-family: "Roboto_500Medium";
    text-align: center;

    ${props => props.editable && css`
        background-color: #f6f6f6;
    `}
`