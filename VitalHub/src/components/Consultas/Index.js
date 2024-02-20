import { useContext, useState } from "react";
import { BoxSituacao, ContentSituacao, TitleSituacao } from "./Style"

export const Situacao = ({ situacao, setSituacao }) => {
    // const [situacao, setSituacao] = useState();

    return (
        <ContentSituacao>
            <BoxSituacao clickButton={situacao === "agendadas"} onPress={() => { setSituacao("agendadas") }}>
                <TitleSituacao clickButton={situacao === "agendadas"}>Agendadas</TitleSituacao>
            </BoxSituacao>

            <BoxSituacao clickButton={situacao === "realizadas"} onPress={() => { setSituacao("realizadas") }}>
                <TitleSituacao clickButton={situacao === "realizadas"}>Realizadas</TitleSituacao>
            </BoxSituacao>

            <BoxSituacao clickButton={situacao === "canceladas"} onPress={() => { setSituacao("canceladas") }}>
                <TitleSituacao clickButton={situacao === "canceladas"}>Canceladas</TitleSituacao>
            </BoxSituacao>
        </ContentSituacao>
    )
}