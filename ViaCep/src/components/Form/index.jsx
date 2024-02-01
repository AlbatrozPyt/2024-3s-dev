import { ScrollView, TextInput, View } from "react-native";
import { ContainerForm, ScrollForm } from "./style";
import { BoxInput } from "../BoxInput"

export function Form() {
    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput 
                    textLabel={'informar CEP'}
                    placeholder={"Cep..."}
                    keyType="numeric"
                    maxLentgh={9} 
                />
            </ContainerForm>
        </ScrollForm>
    )
}