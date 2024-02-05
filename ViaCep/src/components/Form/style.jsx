import styled from "styled-components";

export const ScrollForm = styled.ScrollView `
    height: 80%;
`

export const ContainerForm = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    margin-left: 40px;
    justify-content: space-between;
`

export const ContainerInput = styled.View`
    width: 320px;
    flex-direction: row;
    justify-content: space-between;
`

export const BoxInput = styled.View `
    margin-top: 20px;
    width: 320px;
    height: 120px;
`

export const BoxInputMedium = styled(BoxInput) `
    width: 219px;
`

export const BoxInputSmall = styled(BoxInput) `
    width: 74px;
`
