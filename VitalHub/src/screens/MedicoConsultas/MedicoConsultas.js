import { StatusBar, View } from "react-native"
import { BoxTitleHeader, BoxView, HeaderContainer, HeaderContent, Notification, SubTitleHeader, TitleHeader } from "../../components/Header/Style"
import { LinearGradient } from "expo-linear-gradient"
import { ImagePerfil } from "../../components/ImagePerfil/Style"
import { BoxDay, ContainerData, ContentData, Day, DayWeek, MonthAndYear } from "../../components/ContainerData/Style"
import { Container } from "../../components/Container/Style"
import { BoxConsulta, BoxConsultasText, BoxSituacao, CardConsulta, CardSubTitle, CardTitle, ContainerConsultas, ContentConsultas, ContentSituacao, Horario, IconTime, ImageConsulta, TitleSituacao } from "../../components/Consultas/Style"

export const MedicoConsultas = () => {
    return (
        <Container>
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
                    <BoxView>

                        <ImagePerfil source={require("../../assets/ImagemPerfil.png")} />

                        <BoxTitleHeader>
                            <SubTitleHeader>
                                Bem Vindo
                            </SubTitleHeader>
                            <TitleHeader>Dr. Claudio</TitleHeader>
                        </BoxTitleHeader>
                    </BoxView>

                    <Notification source={require("../../assets/Sino.png")} />
                </HeaderContent>
            </HeaderContainer>

            <ContentData>
                <ContainerData>
                    <MonthAndYear>Novembro 2023</MonthAndYear>

                    <BoxDay>
                        <DayWeek>Dom</DayWeek>
                        <Day>01</Day>
                    </BoxDay>

                    <BoxDay>
                        <DayWeek>Seg</DayWeek>
                        <Day>02</Day>
                    </BoxDay>

                    <BoxDay>
                        <DayWeek>Ter</DayWeek>
                        <Day>03</Day>
                    </BoxDay>

                    <BoxDay>
                        <DayWeek>Qua</DayWeek>
                        <Day>04</Day>
                    </BoxDay>

                    <BoxDay>
                        <DayWeek>Qui</DayWeek>
                        <Day>05</Day>
                    </BoxDay>

                    <BoxDay>
                        <DayWeek>Sex</DayWeek>
                        <Day>06</Day>
                    </BoxDay>

                    <BoxDay>
                        <DayWeek>Sab</DayWeek>
                        <Day>07</Day>
                    </BoxDay>
                </ContainerData>
            </ContentData>

            <ContentSituacao>
                <BoxSituacao>
                    <TitleSituacao>Agendadas</TitleSituacao>
                </BoxSituacao>

                <BoxSituacao>
                    <TitleSituacao>Realizadas</TitleSituacao>
                </BoxSituacao>

                <BoxSituacao>
                    <TitleSituacao>Canceladas</TitleSituacao>
                </BoxSituacao>
            </ContentSituacao>

            <ContainerConsultas>
                <CardConsulta>
                    <ImageConsulta source={require("../../assets/Nicolle.png")}/>

                    <BoxConsultasText>
                        <CardTitle>Nicolle Sarga</CardTitle>
                        <CardSubTitle>22 Idade . Rotina</CardSubTitle>
                        <Horario> <IconTime source={require("../../assets/time.png")} /> 14:00 </Horario>
                    </BoxConsultasText>
                </CardConsulta>
            </ContainerConsultas>

        </Container>
    )
}