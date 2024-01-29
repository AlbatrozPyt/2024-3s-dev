import { StatusBar } from "expo-status-bar";

import { View, Text, StyleSheet } from "react-native"

const Person = ({ name, age }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome: {name}</Text>
            <Text style={styles.text}>Idade: {age}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        padding: 15,
        margin: 100,
        borderRadius: 50
    },
    text: {
        fontSize: 20,
        fontFamily: "BebasNeue_400Regular",
        color: "white"
    }
})

export default Person;