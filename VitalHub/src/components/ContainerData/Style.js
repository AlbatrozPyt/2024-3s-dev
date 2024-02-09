import styled from "styled-components";

// Segura tudo
export const ContentData = styled.View`
    margin-top: 20px;
    width: 100%;
    height: 77px;
    align-items: center;
`
// Segurar Mes e Dias
export const ContainerData = styled.View`
    width: 90%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`

// Mes e o ano
export const MonthAndYear = styled.Text`
    font-size: 20px;
    font-family: "MontserratAlternates_600SemiBold";
    width: 100%;
`
// Box do dia e dia da semana
export const BoxDay = styled.View`
    width: 42px;
    height: 42px;
    align-items: center;
`
// dia da semana
export const DayWeek = styled.Text`
    font-size: 12px;
    font-family: "Quicksand_600SemiBold";
`

// dia
export const Day = styled(DayWeek)`
    font-size: 16px;
`