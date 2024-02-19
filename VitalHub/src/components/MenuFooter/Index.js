import { BoxButtonFooter, ContainerFooter, MenuFooter, TextButtonFooter } from "./Style"

import { FontAwesome6 } from "@expo/vector-icons";

export const Footer = () => {
    return (
        <MenuFooter>
            <ContainerFooter>
                <BoxButtonFooter>
                    <FontAwesome6 name="calendar-check" size={18} color="#4E4B59" />
                    <TextButtonFooter>Agenda</TextButtonFooter>
                </BoxButtonFooter>

                <BoxButtonFooter>
                    <FontAwesome6 name="hospital" size={18} color="#4E4B59" />
                    <TextButtonFooter>Clínicas</TextButtonFooter>
                </BoxButtonFooter>

                <BoxButtonFooter>
                    <FontAwesome6 name="user-large" size={18} color="#4E4B59" />
                    <TextButtonFooter>Perfil</TextButtonFooter>
                </BoxButtonFooter>
            </ContainerFooter>
        </MenuFooter>
    )
}