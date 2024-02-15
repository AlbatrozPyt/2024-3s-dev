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
            <Button
                title="Consultas Pacinte"
                onPress={() => navigation.navigate("ConsultasPaciente")}
            />
            <Button
                title="Prontuario"
                onPress={() => navigation.navigate("Prontuario")}
            />
            <Button
                title="Editar Prontuario"
                onPress={() => navigation.navigate("EditarProntuario")}
            />
            <Button
                title="Selecionar Clinica"
                onPress={() => navigation.navigate("SelecionarClinica")}
            />
        </View>
    )
}