import styled from "styled-components";

export const BottomCamera = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 150px;
    background-color: transparent;
`

export const LastPhotoBox = styled.View`
    position: absolute;
    right: 0;
    margin: 20px;
    width: 90px;
    height: 90px;
`

export const LastPhoto = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`

export const CameraIcons = styled.Image`
    width: 50px;
    height: 50px;
`

export const ButtonBack = styled.TouchableOpacity`
    position: absolute;
    margin: 40px;
`