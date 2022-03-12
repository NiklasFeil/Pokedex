import React from 'react'
import { View, Text } from 'react-native'
import styles from "./styles"

const AboutSection = (props) => {

    const entryTextContent = "CHARIZARD flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.";

    return (
        <View style={styles.container}>
            <Text style={styles.entryText}>
                {entryTextContent}
            </Text>
        </View>
    );
};

export default AboutSection;