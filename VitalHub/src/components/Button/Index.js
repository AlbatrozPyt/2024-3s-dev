import { TouchableOpacity } from "react-native"
import { LinkAccount } from "../ContextAccout/Style"

export const ButtonCancel = ({setModal}) => {
    return (
        <TouchableOpacity onPress={() => { setModal(false) }}>
          <LinkAccount>Cancelar</LinkAccount>
        </TouchableOpacity>
    )
}