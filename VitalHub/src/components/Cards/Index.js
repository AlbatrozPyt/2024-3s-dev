import { FlatList } from "react-native";
import { BoxHorario } from "../BoxHorario/Index";
import { BoxConsultasText, CardConsulta, CardSubTitle, CardTitle, ContainerConsultas, Horario, HorarioRealizado, ImageConsulta, ModalButton, TextCancel, TextVerProntuario } from "../Consultas/Style"

import { AntDesign } from "@expo/vector-icons";

export const Cards = ({ situacao }) => {
    const obj = {
        id: 1,
        name: "Nicolle Sarga",
        age: "22 anos",
        type: "Rotina",
        situacao: "agendadas"
    }
    return (
        <ContainerConsultas>
            {
                // consultas canceladas
                obj.situacao === "canceladas" && obj.situacao === situacao ? (
                    <CardConsulta>
                        <ImageConsulta source={require("../../assets/Nicolle.png")} />

                        <BoxConsultasText>
                            <CardTitle>{obj.name}</CardTitle>
                            <CardSubTitle>{obj.age} · {obj.type}</CardSubTitle>

                            <BoxHorario situacao={obj.type} />

                        </BoxConsultasText>
                    </CardConsulta>
                ) : null
            }
            {
                // consultas realizadas
                obj.situacao === "realizadas" && obj.situacao === situacao ? (
                    <CardConsulta>
                        <ImageConsulta source={require("../../assets/Nicolle.png")} />

                        <BoxConsultasText>
                            <CardTitle>{obj.name}</CardTitle>
                            <CardSubTitle>{obj.age} · {obj.type}</CardSubTitle>

                            <BoxHorario situacao={obj.type} />

                        </BoxConsultasText>

                        <ModalButton>
                            <TextVerProntuario>Ver prontuario</TextVerProntuario>
                        </ModalButton>
                    </CardConsulta>
                ) : null
            }
            {
                obj.situacao === "agendadas" && obj.situacao === situacao ? (
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
                ) : null
            }


        </ContainerConsultas>
    )
}