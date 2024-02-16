import styled from "styled-components";
import { Horario } from "../Consultas/Style";

export const CardClinica = styled.View.attrs({
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
})`
    width: 90%;
    height: 84px;
    background-color: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 12px;
    margin-bottom: 10px;
`

// HorarioAtendimento 
export const HorarioAtendimento = styled(Horario)`
    width: 100px;
    margin-top: 10px;
`