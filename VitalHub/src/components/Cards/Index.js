import { BoxConsultasText, CardConsulta, CardSubTitle, CardTitle, ContainerConsultas, Horario, HorarioRealizado, ImageConsulta, ModalButton, TextCancel } from "../Consultas/Style"

import { AntDesign } from "@expo/vector-icons";

export const Cards = () => {
    return (
        <ContainerConsultas>
            <CardConsulta>
                <ImageConsulta source={require("../../assets/Nicolle.png")} />

                <BoxConsultasText>
                    <CardTitle>Nicolle Sarga</CardTitle>
                    <CardSubTitle>22 Idade · Rotina</CardSubTitle>
                    <HorarioRealizado>
                        {" "}
                        <AntDesign
                            name="clockcircle"
                            size={14}
                            color="#4E4B59"
                        /> 14:00{" "}
                    </HorarioRealizado>
                </BoxConsultasText>

                <ModalButton>
                    <TextCancel>Cancelar</TextCancel>
                </ModalButton>
            </CardConsulta>
        </ContainerConsultas>
    )
}