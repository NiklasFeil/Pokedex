import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        
    },
    entryTextContainer: {
        backgroundColor: "red",
    }, 
    entryText: {
        fontSize: 12,
    },
    physiqueShadow: {

    },
    physiqueContainer: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        width: "100%",
    },
    heightContainer: {
        paddingVertical: 15,
        backgroundColor: "red",
    },
    heightTitleText: {
        paddingBottom: 15,
        fontWeight: "bold",
    },
    heightText: {
        textAlign: "center",
    },
    weightContainer: {
        paddingVertical: 15,
    },
    weightTitleText: {
        paddingBottom: 15,
        fontWeight: "bold",
    },
    weightText: {
        textAlign: "center",
    }
});

export default styles;