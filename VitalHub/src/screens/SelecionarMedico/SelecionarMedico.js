import { Button } from "../../components/Button/Style"
import { CardClinica, HorarioAtendimento } from "../../components/Cards/Style"
import { CardConsulta, CardTitle, ImageConsulta } from "../../components/Consultas/Style"
import { BoxInverse, Container, ContainerInternoScroll, ContainerSelecionarClinica } from "../../components/Container/Style"
import { ContentAccount, LinkAccount } from "../../components/ContextAccout/Style"
import { BoxTitleHeader, SubTitleHeader } from "../../components/Header/Style"
import { ButtonTitle, TextNote, Title } from "../../components/Title/Style"
import { AntDesign } from '@expo/vector-icons';

export const SelecionarMedico = ({navigation}) => {
    return (
        <Container>

            <ContainerSelecionarClinica>
                <ContainerInternoScroll>
                    <Title>Selecionar médico</Title>

                    <CardConsulta>
                        <ImageConsulta source={require("../../assets/DraAlessandra.png")} />

                        <BoxTitleHeader>
                            <CardTitle>Clínica Natureh</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>
                    </CardConsulta>

                    <CardConsulta>
                        <ImageConsulta source={require("../../assets/Dr Kumushiro.png")} />
                        <BoxTitleHeader>
                            <CardTitle>Diamond Pró-Mulher</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>
                    </CardConsulta>

                    <CardConsulta>
                        <ImageConsulta source={require("../../assets/Dr Rodrigo Santos.png")} />
                        <BoxTitleHeader>
                            <CardTitle>Clinica Villa Lobos</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>


                    </CardConsulta>

                    <CardConsulta>
                        <ImageConsulta source={require("../../assets/DraAlessandra.png")} />

                        <BoxTitleHeader>
                            <CardTitle>Clínica Natureh</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>
                    </CardConsulta>

                    <CardConsulta>
                        <ImageConsulta source={require("../../assets/Dr Kumushiro.png")} />
                        <BoxTitleHeader>
                            <CardTitle>Diamond Pró-Mulher</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>
                    </CardConsulta>

                    <CardConsulta>
                        <ImageConsulta source={require("../../assets/Dr Rodrigo Santos.png")} />
                        <BoxTitleHeader>
                            <CardTitle>Clinica Villa Lobos</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>


                    </CardConsulta>
                </ContainerInternoScroll>
            </ContainerSelecionarClinica>

            <Button onPress={() => navigation.navigate('SelecionarData')}>
                <ButtonTitle>continuar</ButtonTitle>
            </Button>

            <ContentAccount onPress={() => navigation.replace('Main')}>
                <LinkAccount>cancelar</LinkAccount>
            </ContentAccount>
        </Container>
    )
}