import moment from "moment"
import { StyleSheet } from "react-native";
import { StyledCalendarStrip } from "./Style";

export const Calendar = () => {
    //instância da data atual
    const currentDate = new Date();

    //define a data inicial como sendo o primeiro dia do mês
    const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    //define a data final como sendo o último dia do mês
    const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    //retorna o componente StyleCalendarStrip
    return (
        <StyledCalendarStrip
            // animação e seleção de cada data
            calendarAnimation={{ type: "sequence", duration: 30 }}
            daySelectionAnimation={styles.selectedAnimationStyle}

            // seta esquerda e direita para avançar e voltar(aqui como display none)
            iconLeftStyle={styles.iconsStyle}
            iconRightStyle={styles.iconsStyle}

            // deixa uma marcação default - data atual
            selectedDate={currentDate}
            // dia que começamos a visualizar a barra
            startingDate={moment()}

            //data min e max - início do mês e final do mês
            minDate={startingDate}
            maxDate={endingDate}

            //estilização dos itens que não estão selecionados
            calendarHeaderStyle={styles.calendarHeaderStyle}
            dateNumberStyle={styles.numberDateStyle}
            dateNameStyle={styles.nameDateStyle}

            // estilização do item que está selecionado - efeito do item marcado
            highlightDateNameStyle={styles.selectedDateNameStyle}
            highlightDateNumberStyle={styles.selectedDateNumberStyle}
            highlightDateContainerStyle={styles.selectedContainerStyle}

            //tamanho do container
            iconContainer={{ flex: 0.1 }}

            //scroll da barra
            scrollable={true}
        />
    );
}

const styles = StyleSheet.create({
    iconsStyle: {
        display: 'none'
    },
    calendarHeaderStyle: {
        fontSize: 22,
        textAlign: "center",
        alignSelf: 'flex-start',
        color: '#4E4B59',
        fontFamily: "MontserratAlternates_600SemiBold",
        paddingHorizontal: 16
    },
    nameDateStyle: {
        color: "#ACABB7",
        fontSize: 12,
        textTransform: 'capitalize'
    },
    numberDateStyle: {
        color: "#5F5C6B",
        fontSize: 16
    },
    selectedDateNameStyle: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        textTransform: 'capitalize'
    },
    selectedDateNumberStyle: {
        color: "white",
        fontSize: 14
    },
    selectedContainerStyle: {
        backgroundColor: `#60BFC5`
    },
    selectedAnimationStyle: {
        type: "border",
        duration: 200,
        borderWidth: 2,
        borderHighlightColor: "#49B3BA"
    }
})
