import { Button, Text } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"

export const Login = () => {
    return (
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Entrar ou criar conta</Title>


            <Input placeholder="Usuario ou email" />

            <Input placeholder="Senha"/>


            {/*
            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle>Entra com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta ? Crie uma agora!</TextAccount>
            </ContentAccount> */}
        </Container>
    )
}