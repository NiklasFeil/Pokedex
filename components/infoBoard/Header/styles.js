import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        position: "relative",
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal: 20,
        top: 20,
    },
    button: {
        backgroundColor: "#DDD",
        width: "22%",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 11,
        fontWeight: "bold",
    }
});

export default styles;