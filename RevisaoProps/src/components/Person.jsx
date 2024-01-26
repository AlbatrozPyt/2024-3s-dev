import { View, Text, StyleSheet }  from "react-native"

const Person = ({name, age}) => {
    return (
        <View style={styles.container}>
            <Text>Nome: {name}</Text>
            <Text>Idade: {age}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "cyan",
        padding: 10,
        margin: 10,
        borderRadius: "5px"
    }
})

export default Person;