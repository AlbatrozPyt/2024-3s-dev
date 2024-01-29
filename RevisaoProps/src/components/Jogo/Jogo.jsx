import { StyleSheet, Text, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"

const Jogo = ({ nome, genero, estudio, dataLancamento }) => {
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Nome do Jogo - {nome}
                </Text>
                <Text style={styles.text}>
                    Gênero - {genero}
                </Text>
                <Text style={styles.text}>
                    Estudio - {estudio}
                </Text>
                <Text style={styles.text}>
                    Data de lançamento - {dataLancamento}
                </Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 2,
        marginTop: 20,
        padding: 15
    },
    container: {
        flex: 1,
        marginTop: 20,
        padding: 15,
    },
    text: {
        fontSize: 20,
        fontFamily: "BebasNeue_400Regular",
        color: "white"
    }
})

export default Jogo;