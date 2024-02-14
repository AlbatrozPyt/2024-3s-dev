import {
  Container,
  ContainerFloating,
  ContainerInput,
  ContainerMultiInput,
  ContainerScroll,
} from "../../components/Container/Style";
import { ImagePacienteLarge } from "../../components/Image/Style";
import { ButtonTitle, Label, Title } from "../../components/Title/Style";
import { TextModalProntuario } from "../../components/Modals/Style";
import {
  InputDisabled,
  InputSmallDisabled,
} from "../../components/Input/Style";
import { Button, ButtonExit } from "../../components/Button/Style"

export const Perfil = () => {
  return (
    <Container>
      <ImagePacienteLarge source={require("../../assets/KostaLarge.png")} />

      <ContainerFloating>
        <Title>Richard Kosta</Title>

        <TextModalProntuario>richard.kosta@gmail.com</TextModalProntuario>
      </ContainerFloating>

      <ContainerScroll>
        <ContainerInput>
          <Label>Data de nascimento:</Label>
          <InputDisabled value="04/05/1999" editable={false} />
        </ContainerInput>

        <ContainerInput>
          <Label>CPF</Label>
          <InputDisabled value="859********" editable={false} />
        </ContainerInput>

        <ContainerInput>
          <Label>Endereço</Label>
          <InputDisabled value="Rua Vicenso Silva, 987" editable={false} />
        </ContainerInput>

        <ContainerMultiInput>
          <ContainerInput style={{width: "fit-content"}}>
            <Label>Cep</Label>
            <InputSmallDisabled value="06548-909" editable={false} />
          </ContainerInput>

          <ContainerInput style={{width: "fit-content"}}>
            <Label>Cidade</Label>
            <InputSmallDisabled value="Moema-SP" editable={false} />
          </ContainerInput>
        </ContainerMultiInput>

        <Button>
          <ButtonTitle>salvar</ButtonTitle>
        </Button>

        <Button>
          <ButtonTitle>editar</ButtonTitle>
        </Button>

        <ButtonExit>
          <ButtonTitle>
            Sair do App
          </ButtonTitle>
        </ButtonExit>
      </ContainerScroll>
    </Container>
  );
};
