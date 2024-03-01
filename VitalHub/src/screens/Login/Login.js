import { Image, Text } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title, ButtonTitle, ButtonTitleGoogle } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium } from "../../components/Link/Style"
import { Button, ButtonGoogle } from "../../components/Button/Style"
import { ContentAccount, LinkAccount, TextAccount } from "../../components/ContextAccout/Style"

export const Login = ({navigation}) => {
    return (
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Entrar ou criar conta</Title>


            <Input placeholder="Usuario ou email" />

            <Input placeholder="Senha" />



            <LinkMedium>Esqueceu sua senha?</LinkMedium>


            <Button onPress={() => navigation.navigate("MedicoConsultas")}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>


            <ButtonGoogle>
                <Image source={require("../../../assets/GOOGLE.png")} />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>


            <ContentAccount onPress={() => navigation.navigate("criar conta")} >
                <TextAccount>Não tem conta ? <LinkAccount> Crie uma agora!</LinkAccount></TextAccount> 
            </ContentAccount>
        </Container>
    )
}