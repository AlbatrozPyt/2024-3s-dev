import { ButtonIcon, ContainerButtonIcon } from "../../components/ButtonIcons/Style"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { ButtonTitle, SimpleText, Title, UserEmail } from "../../components/Title/Style"
import { ContentAccount, LinkAccount } from "../../components/ContextAccout/Style"
import { BoxCodeInput, CodeInput, Input } from "../../components/Input/Style"
import { Button } from "../../components/Button/Style"

export const VerificarEmail = ({navigation}) => {
    return (
        <Container>
            <ContainerButtonIcon onPress={() => navigation.replace("login")}>
                <ButtonIcon source={require("../../../assets/close.png")} />
            </ContainerButtonIcon>

            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Verifique seu e-mail</Title>

            <SimpleText>
                Digite o código de 4 dígitos enviado para <UserEmail>username@email.com</UserEmail>
            </SimpleText>

            <BoxCodeInput>
                <CodeInput placeholder={"0"} keyboardType="numeric" maxLength={1} />
                <CodeInput placeholder={"0"} keyboardType="numeric" maxLength={1} />
                <CodeInput placeholder={"0"} keyboardType="numeric" maxLength={1} />
                <CodeInput placeholder={"0"} keyboardType="numeric" maxLength={1} />
            </BoxCodeInput>

            <Button onPress={() => navigation.navigate("RedefinirSenha")}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>


            <ContentAccount>
                <LinkAccount>Reenviar Código</LinkAccount>
            </ContentAccount>
        </Container>
    )
}