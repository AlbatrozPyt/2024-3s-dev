import { AntDesign } from "@expo/vector-icons";
import { Horario, HorarioRealizado } from "../Consultas/Style";
export const BoxHorario = ({ situacao }) => {
    return (
        situacao === "agendadas" ?
            (
                <Horario>
                    {" "}
                    <AntDesign
                        name="clockcircle"
                        size={14}
                        color="#49B3BA"
                    /> 14:00{" "}
                </Horario>
            ) :
            (
                <HorarioRealizado>
                    {" "}
                    <AntDesign
                        name="clockcircle"
                        size={14}
                        color="#4E4B59"
                    /> 14:00{" "}
                </HorarioRealizado>
            )
    )
}