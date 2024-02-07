import { ButtonIcon, ContainerButtonIcon } from "../../components/ButtonIcons/ButtonIcons"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { SimpleText, Title } from "../../components/Title/Style"
import { LinkAccout } from "../../components/ContextAccout/Style"

export const VerificarEmail = () => {
    return (
        <Container>
            <ContainerButtonIcon>
                <ButtonIcon source={require("../../../assets/close.png")} />
            </ContainerButtonIcon>

            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Verifique seu e-mail</Title>

            <SimpleText>
                Digite o código de 4 dígitos enviado para <LinkAccout>username@email.com</LinkAccout>
            </SimpleText>
        </Container>
    )
}