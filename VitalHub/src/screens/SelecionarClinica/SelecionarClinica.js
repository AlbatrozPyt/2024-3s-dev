import { CardClinica, HorarioAtendimento } from "../../components/Cards/Style"
import { CardTitle } from "../../components/Consultas/Style"
import { BoxInverse, Container, ContainerInternoScroll, ContainerScroll, ContainerSelecionarClinica } from "../../components/Container/Style"
import { BoxTitleHeader, SubTitleHeader } from "../../components/Header/Style"
import { ButtonTitle, TextNote, Title } from "../../components/Title/Style";
import { Button } from "../../components/Button/Style";
import { LinkAccount } from "../../components/ContextAccout/Style"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const SelecionarClinica = () => {
    return (


        <Container>


            <ContainerSelecionarClinica>
                <ContainerInternoScroll>
                    <Title>Selecionar Clinica</Title>

                    <CardClinica>
                        <BoxTitleHeader>
                            <CardTitle>Clínica Natureh</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>

                        <BoxInverse>
                            <TextNote> <AntDesign name="star" size={24} color="#F9A620" /> 4,5</TextNote>

                            <HorarioAtendimento>
                                <MaterialCommunityIcons name="calendar-outline" size={14} color="#49b3ba" /> Seg-Sex
                            </HorarioAtendimento>
                        </BoxInverse>
                    </CardClinica>

                    <CardClinica>
                        <BoxTitleHeader>
                            <CardTitle>Diamond Pró-Mulher</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>

                        <BoxInverse>
                            <TextNote> <AntDesign name="star" size={24} color="#F9A620" /> 4,8</TextNote>

                            <HorarioAtendimento>
                                <MaterialCommunityIcons name="calendar-outline" size={14} color="#49b3ba" /> Seg-Sex
                            </HorarioAtendimento>
                        </BoxInverse>
                    </CardClinica>

                    <CardClinica>
                        <BoxTitleHeader>
                            <CardTitle>Clinica Villa Lobos</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>

                        <BoxInverse>
                            <TextNote> <AntDesign name="star" size={24} color="#F9A620" /> 4,2</TextNote>

                            <HorarioAtendimento>
                                <MaterialCommunityIcons name="calendar-outline" size={14} color="#49b3ba" /> Seg-Sex
                            </HorarioAtendimento>
                        </BoxInverse>
                    </CardClinica>

                    <CardClinica>
                        <BoxTitleHeader>
                            <CardTitle>SP Oncologia Clínica</CardTitle>

                            <SubTitleHeader>Taboão, SP</SubTitleHeader>
                        </BoxTitleHeader>

                        <BoxInverse>
                            <TextNote> <AntDesign name="star" size={24} color="#F9A620" /> 4,2</TextNote>

                            <HorarioAtendimento>
                                <MaterialCommunityIcons name="calendar-outline" size={14} color="#49b3ba" /> Seg-Sex
                            </HorarioAtendimento>
                        </BoxInverse>
                    </CardClinica>


                    <CardClinica>
                        <BoxTitleHeader>
                            <CardTitle>Clínica Natureh</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>

                        <BoxInverse>
                            <TextNote> <AntDesign name="star" size={24} color="#F9A620" /> 4,5</TextNote>

                            <HorarioAtendimento>
                                <MaterialCommunityIcons name="calendar-outline" size={14} color="#49b3ba" /> Seg-Sex
                            </HorarioAtendimento>
                        </BoxInverse>
                    </CardClinica>

                    <CardClinica>
                        <BoxTitleHeader>
                            <CardTitle>Diamond Pró-Mulher</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>

                        <BoxInverse>
                            <TextNote> <AntDesign name="star" size={24} color="#F9A620" /> 4,8</TextNote>

                            <HorarioAtendimento>
                                <MaterialCommunityIcons name="calendar-outline" size={14} color="#49b3ba" /> Seg-Sex
                            </HorarioAtendimento>
                        </BoxInverse>
                    </CardClinica>

                    <CardClinica>
                        <BoxTitleHeader>
                            <CardTitle>Clinica Villa Lobos</CardTitle>

                            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
                        </BoxTitleHeader>

                        <BoxInverse>
                            <TextNote> <AntDesign name="star" size={24} color="#F9A620" /> 4,2</TextNote>

                            <HorarioAtendimento>
                                <MaterialCommunityIcons name="calendar-outline" size={14} color="#49b3ba" /> Seg-Sex
                            </HorarioAtendimento>
                        </BoxInverse>
                    </CardClinica>

                    <CardClinica>
                        <BoxTitleHeader>
                            <CardTitle>SP Oncologia Clínica</CardTitle>

                            <SubTitleHeader>Taboão, SP</SubTitleHeader>
                        </BoxTitleHeader>

                        <BoxInverse>
                            <TextNote> <AntDesign name="star" size={24} color="#F9A620" /> 4,2</TextNote>

                            <HorarioAtendimento>
                                <MaterialCommunityIcons name="calendar-outline" size={14} color="#49b3ba" /> Seg-Sex
                            </HorarioAtendimento>
                        </BoxInverse>
                    </CardClinica>

                </ContainerInternoScroll>

            </ContainerSelecionarClinica>

            <Button>
                <ButtonTitle>continuar</ButtonTitle>
            </Button>
            <LinkAccount>cancelar</LinkAccount>
        </Container>




    )
}