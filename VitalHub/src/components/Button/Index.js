import { TouchableOpacity } from "react-native"
import { ContentAccount, LinkAccount } from "../ContextAccout/Style"

export const ButtonCancel = ({ screen = null, navigation }) => {
  return (
    <ContentAccount
      onPress={() => navigation.replace(screen)}
    >
      <LinkAccount>Cancelar</LinkAccount>
    </ContentAccount>
  )
}