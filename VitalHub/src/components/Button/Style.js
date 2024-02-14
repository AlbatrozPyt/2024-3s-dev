import styled from "styled-components";

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