import { Image, Text } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title, ButtonTitle, ButtonTitleGoogle } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium } from "../../components/Link/Style"
import { Button, ButtonGoogle } from "../../components/Button/Style"
import { ContentAccount, LinkAccout, TextAccount } from "../../components/ContextAccout/Style"

export const Login = () => {
    return (
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Entrar ou criar conta</Title>


            <Input placeholder="Usuario ou email" />

            <Input placeholder="Senha" />



            <LinkMedium>Esqueceu sua senha?</LinkMedium>


            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>


            <ButtonGoogle>
                <Image source={require("../../../assets/GOOGLE.png")} />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>


            <ContentAccount>
                <TextAccount>Não tem conta ? <LinkAccout> Crie uma agora!</LinkAccout></TextAccount> 
            </ContentAccount>
        </Container>
    )
}