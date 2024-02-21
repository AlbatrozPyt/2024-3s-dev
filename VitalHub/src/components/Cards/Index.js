import { FlatList, Text } from "react-native";
import { BoxHorario } from "../BoxHorario/Index";
import { BoxConsultasText, CardConsulta, CardSubTitle, CardTitle, ContainerConsultas, ImageConsulta, ModalButton, TextCancel, TextVerProntuario } from "../Consultas/Style"
import { ModalCancelar } from "../Modals/Index"

import { AntDesign } from "@expo/vector-icons";

export const Cards = ({ situacao, setModal, setPaciente }) => {
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
    }]
    return (
        <ContainerConsultas>
            {lista.map((obj) => {

                // consultas canceladas
                if (obj.situacao === "canceladas" && obj.situacao === situacao) {
                    return (
                        <CardConsulta>
                            <ImageConsulta source={require("../../assets/Nicolle.png")} />

                            <BoxConsultasText>
                                <CardTitle>{obj.name}</CardTitle>
                                <CardSubTitle>{obj.age} · {obj.type}</CardSubTitle>

                                <BoxHorario situacao={obj.type} />

                            </BoxConsultasText>
                        </CardConsulta>
                    )
                }


                // consultas realizadas
                if (obj.situacao === "realizadas" && obj.situacao === situacao) {
                    return (
                        <CardConsulta>
                            <ImageConsulta source={require("../../assets/vinicius.png")} />

                            <BoxConsultasText>
                                <CardTitle>{obj.name}</CardTitle>
                                <CardSubTitle>{obj.age} · {obj.type}</CardSubTitle>

                                <BoxHorario situacao={obj.type} />

                            </BoxConsultasText>

                            <ModalButton onPress={() => { setModal(true); setPaciente(obj); }}>
                                <TextVerProntuario>Ver prontuario</TextVerProntuario>
                            </ModalButton>
                        </CardConsulta>
                    )
                }


                if (obj.situacao === "agendadas" && obj.situacao === situacao) {
                    return (
                        // consultas agendadas
                        <CardConsulta>
                            <ImageConsulta source={require("../../assets/Nicolle.png")} />

                            <BoxConsultasText>
                                <CardTitle>{obj.name}</CardTitle>
                                <CardSubTitle>{obj.age} · {obj.type}</CardSubTitle>

                                <BoxHorario situacao={obj.situacao} />

                            </BoxConsultasText>

                            <ModalButton>
                                <TextCancel>cancelar</TextCancel>
                            </ModalButton>
                        </CardConsulta>
                    )
                }


            })}
        </ContainerConsultas>
    )
}