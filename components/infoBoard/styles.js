import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        height: "65%",
        width: "100%",
        bottom: 0,
        alignItems: "center",
    },
    board: {
        backgroundColor: "white",
        height: "98%",
        width: "95%",
        bottom: 0,
        borderRadius: 50,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 50,
        
    }
});

export default styles;