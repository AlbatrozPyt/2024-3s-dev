import { StatusBar } from "react-native"
import { HeaderContainer, HeaderContent, SubTitleHeader, TitleHeader } from "../../components/Header/Style"
import { LinearGradient } from "expo-linear-gradient"

export const MedicoConsultas = () => {
    return (
        <>
            <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />

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
                    <SubTitleHeader>
                        Bem Vindo
                    </SubTitleHeader>
                    <TitleHeader>Dr. Claudio</TitleHeader>
                </HeaderContent>
            </HeaderContainer>
        </>
    )
}