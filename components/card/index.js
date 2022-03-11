import React from 'react'
import { View } from 'react-native'
import styles from "./styles"
import CardHeader from "../cardHeader"
import InfoBoard from "../infoBoard"

const Card = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <CardHeader />
                <InfoBoard />
            </View>
        </View>
    )
}

export default Card;