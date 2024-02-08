import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const HeaderContainer = styled.SafeAreaView`
    width: 100%;
    height: 144px;
    position: absolute;
    top: 0;
    border-radius: 0 0 20px 20px;
`

export const HeaderContent = styled.View`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SubTitleHeader = styled.Text`
    font-size: 14px;
    font-family: Quicksand_500Medium;
    color: #4E4B59;
`

export const TitleHeader = styled.Text`
    font-size: 16px;
    font-family: "Quicksand_600SemiBold";
    color: #FBFBFB;
`