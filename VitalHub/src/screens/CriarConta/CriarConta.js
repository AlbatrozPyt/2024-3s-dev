import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { ButtonTitle, SimpleText, Title } from "../../components/Title/Style"

export const CriarConta = () => {
    return (
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo.png")}/>

            <Title>Criar conta</Title>

            <SimpleText>
                Insira seu endereço de e-mail e senha para realizar seu cadastro.
            </SimpleText>

            <Input placeholder="Usuário ou E-mail" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirmar Senha" />

            <Button>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>
        </Container>
    )
}