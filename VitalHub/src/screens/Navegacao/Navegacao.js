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
            <Button
                title="Redefinir Senha"
                onPress={() => navigation.navigate("Redefinir Senha")}
            />
            <Button
                title="Criar Conta"
                onPress={() => navigation.navigate("Criar Conta")}
            />
            <Button
                title="Consultas Medico"
                onPress={() => navigation.navigate("ConsultasMedico")}
            />
        </View>
    )
}