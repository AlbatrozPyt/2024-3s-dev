import { Text } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { ButtonIcon, ContainerButtonIcon } from "../../components/ButtonIcons/Style"
import { ButtonTitle, SimpleText, Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { Button } from "../../components/Button/Style"

export const RecuperarSenha = () => {
    return (
        <Container>
            <ContainerButtonIcon>
                <ButtonIcon source={require("../../../assets/back-arrow.png")} />
            </ContainerButtonIcon>

            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Recuperar Senha</Title>

            <SimpleText>
                Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha
            </SimpleText>

            <Input placeholder={"Usuário ou E-mail"}/>

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Container>
    )
}