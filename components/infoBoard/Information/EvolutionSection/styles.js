import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        minHeight: 250,
    },
    evoContainer: {
        backgroundColor: "blue",
        left: 5,
        bottom: 15,
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
    },
    imageContainer: {
        backgroundColor: "yellow",
        width: 90,
    },
    pokeballImage: {
        resizeMode: "contain",
        width: 90,
        height: 90,
    },
    pokemonImage: {
        position: "absolute",
    },
    arrowTextContainer: {
        position: "absolute",
        alignItems: "center",
        
    },
    arrowText: {

    },
    arrowImage: {
        width: "36%",
        height: 90,
        resizeMode: "contain",
    }
});

export default styles;