import { TouchableOpacity } from "react-native"
import { LinkAccount } from "../ContextAccout/Style"

export const ButtonCancel = ({screen=null, navigation}) => {
    return (
        <TouchableOpacity onPress={() =>  navigation.navigate(screen)}>
          <LinkAccount>Cancelar</LinkAccount>
        </TouchableOpacity>
    )
}