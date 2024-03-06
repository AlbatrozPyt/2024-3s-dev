import { Button } from "../../components/Button/Style"
import { ButtonIcon, ContainerButtonIcon } from "../../components/ButtonIcons/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { ButtonTitle, SimpleText, Title } from "../../components/Title/Style"

export const RedefinirSenha = ({navigation}) => {
    return (
        <Container>
            <ContainerButtonIcon onPress={() => navigation.replace("login")} >
                <ButtonIcon source={require("../../../assets/close.png")}/>
            </ContainerButtonIcon>

            <Logo source={require("../../assets/VitalHub_Logo.png")}/>

            <Title>Redefinir Senha</Title>

            <SimpleText>Insira e confirme a sua nova senha</SimpleText>

            <Input placeholder="Nova Senha" />
            <Input placeholder="Confirmar nova senha" />

            <Button onPress={() => navigation.replace("login")} >
                <ButtonTitle>confirmar nova senha</ButtonTitle>
            </Button>
        </Container>
    )
}