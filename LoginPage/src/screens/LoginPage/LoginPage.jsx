import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_900Black, Poppins_700Bold } from '@expo-google-fonts/poppins';


export default function LoginPage() {
    let [fontsLoaded, fontError] = useFonts({
        Poppins_400Regular,
        Poppins_900Black,
        Poppins_700Bold
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/kiwi.png")}
            />

            <Text style={styles.titleText}>Login</Text>

            <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
            />

            <Text style={styles.text}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder='Senha'
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Logar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
        fontFamily: "Poppins_400Regular",
    },
    titleText: {
        fontSize: 50,
        fontFamily: "Poppins_900Black",
        position: 'relative',
        bottom: "35px",
    },
    textButton: {
        fontSize: 20,
        fontWeight: "500",
        color: "white",
    },
    input: {
        width: 300,
        height: 50,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: "5x",
        color: "black",
        fontFamily: "Poppins_400Regular"
    }, 
    button: {
        position: 'relative',
        top: 25,
        width: 170,
        height: 50,
        backgroundColor: "black",
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "20px",
        fontFamily: "Poppins_900Black"
    }
});