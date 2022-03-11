import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Header from "./Header"
import Information from "./Information"

const InfoBoard = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.board}>
                <View>
                    <Header />
                    <Information />
                </View>
            </View>
        </View>
    )
}

export default InfoBoard;