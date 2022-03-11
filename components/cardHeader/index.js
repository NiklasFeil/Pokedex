import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./styles"

const CardHeader = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                style={styles.image}
                source={require("../../assets/images/bulbasaur.png")}
                />
            </View>
            <Text style={styles.name}>Bulbasaur</Text>
        </View>
    )
}

export default CardHeader;