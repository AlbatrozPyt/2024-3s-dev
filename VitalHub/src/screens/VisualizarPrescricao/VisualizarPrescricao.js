import { View } from "react-native"
import { ButtonEnviarImagem } from "../../components/Button/Style"
import { ModalButton, TextCancel } from "../../components/Consultas/Style"
import { Container, ContainerInputProntuario, ContainerMultiInput, ContainerScroll } from "../../components/Container/Style"
import { ContentAccount, LinkAccount } from "../../components/ContextAccout/Style"
import { ImageLarge } from "../../components/Image/Style"
import { InputDisabled, InputLargeDisabled } from "../../components/Input/Style"
import { TextModalProntuario } from "../../components/Modals/Style"
import { ButtonTitle, Label, Title } from "../../components/Title/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const VisualizarPrescricao = ({ navigation }) => {
    return (
        <ContainerScroll>
            <Container>
                <ImageLarge source={require("../../assets/DrClaudioLarge.png")} />
                <Title>Dr. Claudio</Title>

                <TextModalProntuario>Cliníco geral     CRM-15286</TextModalProntuario>

                <ContainerInputProntuario>
                    <Label>Descrição da consulta</Label>
                    <InputLargeDisabled
                        placeholder="O paciente possuí uma infecção no
                    ouvido. Necessário repouse de 2 dias
                    e acompanhamento médico constante"
                        editable={false}
                    />
                </ContainerInputProntuario>

                <ContainerInputProntuario>
                    <Label>Descrição da consulta</Label>
                    <InputLargeDisabled
                        placeholder="O paciente possuí uma infecção no
                    ouvido. Necessário repouse de 2 dias
                    e acompanhamento médico constante"
                        editable={false}
                    />
                </ContainerInputProntuario>

                <ContainerInputProntuario>
                    <Label>Diagnóstico do paciente</Label>
                    <InputDisabled
                        placeholder="Infecção no ouvido"
                        editable={false}
                    />
                </ContainerInputProntuario>

                <ContainerInputProntuario>
                    <Label>Prescrição médica</Label>
                    <InputLargeDisabled
                        placeholder="
                        Medicamento: Advil                   
                        Dosagem: 50 mg   Frequência: 3 vezes ao dia   Duração: 3 dias"
                        editable={false}
                    />
                </ContainerInputProntuario>


                {/* Foto */}
                <Label>Exames médicos</Label>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 20,
                        backgroundColor: `#F5F3F3`,
                        width: `90%`,
                        height: 111
                    }}
                >
                    


                </View>


                {/* Botao de enviar imagem */}
                <ContainerMultiInput style={{ borderBottomWidth: 2, borderColor: `#8C8A97` }}>

                    <ButtonEnviarImagem onPress={() => navigation.navigate(`Photo`)}>
                        <ButtonTitle>
                            <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" /> enviar</ButtonTitle>
                    </ButtonEnviarImagem>

                    <TextCancel>cancelar</TextCancel>
                </ContainerMultiInput>


                <InputLargeDisabled
                    placeholder={"Resultado do exame de sangue : tudo normal"}
                />

                <ContentAccount onPress={() => navigation.replace(`Main`)}>
                    <LinkAccount>voltar</LinkAccount>
                </ContentAccount>
            </Container>
        </ContainerScroll>
    )
}