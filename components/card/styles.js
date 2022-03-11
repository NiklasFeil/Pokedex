import { StyleSheet, Dimensions, StatusBar} from 'react-native'


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: Dimensions.get("window").width - 10,
        height: Dimensions.get("window").height + StatusBar.currentHeight - 10,
        borderRadius: 50,
        backgroundColor: "limegreen",
    },
    
});

export default styles;