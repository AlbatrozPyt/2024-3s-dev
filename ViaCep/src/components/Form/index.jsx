import { ScrollView, Text, TextInput, View } from "react-native";
import { BoxInput, ContainerForm, ScrollForm, BoxInputMedium, BoxInputSmall, ContainerInput } from "./style";
import { Input } from "../Input";
import { Label } from "../Label";
import axios from "axios";
import { useEffect, useState } from "react";


export function Form({ fieldWidth }) {
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState();
    const [bairro, setBairro] = useState();
    const [localidade, setLocalidade] = useState();
    const [uf, setUf] = useState();

    async function GetCep() {

        try {
            const url = `https://viacep.com.br/ws/${cep}/json/`;

            const promise = await axios.get(url);

            console.warn(promise.data);

            setCep(promise.data.cep);
            setLogradouro(promise.data.logradouro);
            setBairro(promise.data.bairro);
            setLocalidade(promise.data.localidade);
            setUf(promise.data.uf);                
        } catch (error) {
            console.warn("ERRO!");
        }
    }
    useEffect(() => {

        if (cep.length === 8) {
            GetCep();
        }
    }, [cep])


    return (
        <ScrollForm>
            <Text>A{cep}</Text>
            <ContainerForm>
                <BoxInput>
                    <Label textLabel={"Informar Cep:"} />
                    <Input
                        placeholder={"Cep..."}
                        keyType={"numeric"}
                        maxLength={8}
                        editable={true}
                        fieldValue={cep}
                        onChangeText={e => setCep(e)}
                    />
                </BoxInput>


                <BoxInput>
                    <Label textLabel={"Logradouro"} />
                    <Input
                        placeholder={"Logradouro..."}
                        editable={false}
                        fieldValue={logradouro}
                    />
                </BoxInput>

                <BoxInput>
                    <Label textLabel={"Bairro"} />
                    <Input
                        placeholder={"Bairro..."}
                        editable={false}
                        fieldValue={bairro}
                    />
                </BoxInput>

                <BoxInput>
                    <Label textLabel={"Cidade"} />
                    <Input
                        placeholder={"Cidade..."}
                        editable={false}
                        fieldValue={localidade}
                    />
                </BoxInput>

                <ContainerInput>
                    <BoxInputMedium>
                        <Label textLabel={"Estado"} />
                        <Input
                            placeholder={"Estado..."}
                            editable={false}
                        />
                    </BoxInputMedium>

                    <BoxInputSmall>
                        <Label textLabel={"UF"} />
                        <Input
                            placeholder={"UF"}
                            editable={false}
                            fieldValue={cep.uf}
                        />
                    </BoxInputSmall>
                </ContainerInput>
            </ContainerForm>
        </ScrollForm>
    )
}