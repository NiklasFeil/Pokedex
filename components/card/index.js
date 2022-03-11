import React from 'react'
import { Text, View, Image, useWin} from 'react-native'
import styles from "./styles"
import CardHeader from "../cardHeader"

const Card = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <CardHeader />
            </View>
        </View>
    )
}

export default Card;