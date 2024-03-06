import { LinearGradient } from "expo-linear-gradient"
import { BoxTitleHeader, BoxView, ButtonNotfication, HeaderContainer, HeaderContent, Notification, SubTitleHeader, TitleHeader } from "./Style"
import { ImagePerfil } from "../ImagePerfil/Style"

export const Header = () => {
    return (
        <HeaderContainer>
            <LinearGradient
                colors={["#60BFC5", "#496BBA"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}
            />
            <HeaderContent>
                <BoxView>
                    <ImagePerfil source={require("../../assets/ImagemPerfil.png")} />

                    <BoxTitleHeader>
                        <SubTitleHeader>Bem Vindo</SubTitleHeader>
                        <TitleHeader>Dr. Claudio</TitleHeader>
                    </BoxTitleHeader>
                </BoxView>

                <ButtonNotfication onPress={() => alert("Você não tem nenhuma notificação😔")}>
                    <Notification source={require("../../assets/Sino.png")} />
                </ButtonNotfication>
            </HeaderContent>
        </HeaderContainer>
    )
}