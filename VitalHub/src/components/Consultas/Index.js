import { useState } from "react";
import { BoxSituacao, ContentSituacao, TitleSituacao } from "./Style"

export const Situacao = () => {
    const [situacao, setSituacao] = useState();
    return (
        <ContentSituacao>
            <BoxSituacao clickButton={situacao === "agendada"} onPress={() => { setSituacao("agendada") }}>
                <TitleSituacao clickButton={situacao === "agendada"}>Agendadas</TitleSituacao>
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