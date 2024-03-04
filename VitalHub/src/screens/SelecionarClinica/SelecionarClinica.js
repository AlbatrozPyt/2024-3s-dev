import { CardClinica, HorarioAtendimento } from "../../components/Cards/Style"
import { CardTitle } from "../../components/Consultas/Style"
import { BoxInverse, Container, ContainerInternoScroll, ContainerScroll, ContainerSelecionarClinica } from "../../components/Container/Style"
import { BoxTitleHeader, SubTitleHeader } from "../../components/Header/Style"
import { ButtonTitle, TextNote, Title } from "../../components/Title/Style";
import { Button } from "../../components/Button/Style";
import { LinkAccount } from "../../components/ContextAccout/Style"
import { CardClinicas } from "../../components/CardClinica/Index";


export const SelecionarClinica = () => {
    return (


        <Container>

            <CardClinicas/>            

            <Button>
                <ButtonTitle>continuar</ButtonTitle>
            </Button>
            <LinkAccount>cancelar</LinkAccount>
        </Container>




    )
}