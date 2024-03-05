import styled from "styled-components";
import { Horario } from "../Consultas/Style";


export const BoxCardClinica = styled.View.attrs({
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
})`
    width: 100%;
    height: 84px;
    background-color: white;
    margin-top: 12px;
    margin-bottom: 10px;
`

export const CardClinica = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    background-color: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

// HorarioAtendimento 
export const HorarioAtendimento = styled(Horario)`
    width: 100px;
    margin-top: 10px;
`