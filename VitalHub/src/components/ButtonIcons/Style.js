import styled from "styled-components";

export const ContainerButtonIcon = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    margin: 20px;
`

export const ButtonIcon = styled.Image`
    width: 30px;
    height: 30px;
`

export const ContainerButtonAgendar = styled(ContainerButtonIcon)`
    bottom: 0;
    right: 0;
    left: none;
`

export const ButtonAgendar = styled(ButtonIcon)`
    width: 60px;
    height: 60px;
`

