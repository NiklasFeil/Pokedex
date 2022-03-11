import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles';

const Information = (props) => {

    const entryTextContent = "CHARIZARD flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.";

    return(
        <View style={styles.container}>
            <ScrollView style={styles.textContainer}>
                <Text style={styles.entryText}>
                    {entryTextContent}
                </Text>
            </ScrollView>
        </View>
    )
};

export default Information;