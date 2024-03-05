import { useState } from "react"
import { BoxCardClinica, CardClinica, HorarioAtendimento } from "../Cards/Style"
import { CardTitle } from "../Consultas/Style"
import { BoxInverse, ContainerInternoScroll, ContainerSelecionarClinica } from "../Container/Style"
import { BoxTitleHeader, SubTitleHeader } from "../Header/Style"
import { TextNote, Title } from "../Title/Style"

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const CardClinicas = () => {

    const [state, setState] = useState("blue");
    const [id, setId] = useState();

    const dados = [
        {
            id: 1,
            nomeClinica: "Clínica Natureh",
            localizacao: "São Paulo, SP",
            nota: "4,5",
            HorarioAtendimento: "Seg-Sex"
        },
        {
            id: 2,
            nomeClinica: "Diamond Pró-Mulher",
            localizacao: "São Paulo, SP",
            nota: "4,8",
            HorarioAtendimento: "Seg-Sex"
        }
    ]
    return (
        <ContainerSelecionarClinica>
            <ContainerInternoScroll>
                <Title>Selecionar Clinica</Title>

                {
                    dados.map((obj) => {
                        return (
                            <BoxCardClinica>
                                <CardClinica>
                                    <BoxTitleHeader>
                                        <CardTitle>{obj.nomeClinica}  {id}</CardTitle>

                                        <SubTitleHeader>{obj.localizacao}</SubTitleHeader>
                                    </BoxTitleHeader>

                                    <BoxInverse>
                                        <TextNote> <AntDesign name="star" size={24} color="#F9A620" /> {obj.nota}</TextNote>

                                        <HorarioAtendimento>
                                            <MaterialCommunityIcons name="calendar-outline" size={14} color="#49b3ba" /> {obj.HorarioAtendimento}
                                        </HorarioAtendimento>
                                    </BoxInverse>
                                </CardClinica>
                            </BoxCardClinica>
                        )
                    })
                }


            </ContainerInternoScroll>
        </ContainerSelecionarClinica>
    )
}