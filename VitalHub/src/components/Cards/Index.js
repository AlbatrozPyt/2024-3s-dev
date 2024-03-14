import { FlatList, Text, Touchable, TouchableOpacity, View } from "react-native";
import { BoxHorario } from "../BoxHorario/Index";
import {
    BoxConsultasText,
    ButtonCardConsulta,
    CardConsulta,
    CardSubTitle,
    CardTitle,
    ContainerConsultas,
    ImageConsulta,
    ModalButton,
    TextCancel,
    TextVerProntuario
} from "../Consultas/Style"
import {
    LocalConsulta,
    ModalCancelar,
    ModalProntuario,
} from "../Modals/Index"

import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export const Cards = ({ situacao, navigation, setPaciente }) => {
    const lista = [{
        id: 1,
        name: "Nicolle Sarga",
        age: "22 anos",
        email: "niccole.sarga@gmail.com",
        image: "Niccole.png",
        type: "Rotina",
        situacao: "agendadas"
    },
    {
        id: 2,
        name: "Vinicius",
        age: "21 anos",
        email: "vinividrade@hotmail.com",
        image: "vinicius.png",
        type: "Exame",
        situacao: "realizadas"
    },
    {
        id: 3,
        name: "Lucas",
        age: "16 anos",
        email: "lucas@email.com",
        image: "lucas.png",
        type: "Rotina",
        situacao: "canceladas"
    }]

    // mostrar ou nao o local da consulta
    const [showModalLocal, setShowModalLocal] = useState(false);
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalVerProntuario, setShowModalVerProntuario] = useState(false);
    const [userRole, setUserRole] = useState('medico')

    return (
        <>
            <ContainerConsultas>
                {lista.map((obj) => {

                    // consultas canceladas
                    if (obj.situacao === "canceladas" && obj.situacao === situacao) {
                        return (
                            <CardConsulta>
                                <ButtonCardConsulta onPress={() => setShowModalLocal(true)}>
                                    <ImageConsulta source={require("../../assets/lucas.jpg")} />

                                    <BoxConsultasText>
                                        <CardTitle>{obj.name}</CardTitle>
                                        <CardSubTitle>{obj.age} · {obj.type}</CardSubTitle>

                                        <BoxHorario situacao={obj.type} />

                                    </BoxConsultasText>
                                </ButtonCardConsulta>
                            </CardConsulta>
                        )
                    }


                    // consultas realizadas
                    if (obj.situacao === "realizadas" && obj.situacao === situacao) {
                        return (
                            <CardConsulta>
                                <ButtonCardConsulta onPress={() => setShowModalLocal(true)}>
                                    <ImageConsulta source={require("../../assets/vinicius.png")} />

                                    <BoxConsultasText>
                                        <CardTitle>{obj.name}</CardTitle>
                                        <CardSubTitle>{obj.age} · {obj.type}</CardSubTitle>

                                        <BoxHorario situacao={obj.type} />

                                    </BoxConsultasText>
                                </ButtonCardConsulta>

                                <ModalButton onPress={() => { setPaciente(obj); navigation.replace(`VisualizarPrescricao`) }}>
                                    <TextVerProntuario>Ver prontuario</TextVerProntuario>
                                </ModalButton>
                            </CardConsulta>
                        )
                    }


                    if (obj.situacao === "agendadas" && obj.situacao === situacao) {
                        return (
                            // consultas agendadas

                            <CardConsulta>
                                <ButtonCardConsulta onPress={() => setShowModalLocal(true)}>
                                    <ImageConsulta source={require("../../assets/Nicolle.png")} />

                                    <BoxConsultasText>
                                        <CardTitle>{obj.name}</CardTitle>
                                        <CardSubTitle>{obj.age} · {obj.type}</CardSubTitle>

                                        <BoxHorario situacao={obj.situacao} />

                                    </BoxConsultasText>
                                </ButtonCardConsulta>

                                <ModalButton onPress={() => setShowModalCancel(true)}>
                                    <TextCancel>cancelar</TextCancel>
                                </ModalButton>
                            </CardConsulta>
                        )
                    }
                })}
                
            </ContainerConsultas >

            {
                showModalCancel === true ? (
                    <ModalCancelar navigation={navigation} />
                ) : null
            }
            
            {
                showModalLocal === true ? (
                    <LocalConsulta navigation={navigation}/>
                ) : null
            }
        </>
    )
}