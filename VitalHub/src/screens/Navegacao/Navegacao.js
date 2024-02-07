import { Button, View } from "react-native"

export const Navegacao = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Recuperar Senha"
                onPress={() => navigation.navigate("Recuperar Senha")}
            />
            <Button
                title="Verificar Email"
                onPress={() => navigation.navigate("Verificar o Email")}
            />
        </View>
    )
}