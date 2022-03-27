import React from 'react'
import { View, Text } from 'react-native'
import styles from "./styles"

const AboutSection = (props) => {

    const entryTextContent = "CHARIZARD flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.";

    return (
        <View style={styles.container}>
            <View style={styles.entryTextContainer}>
                <Text style={styles.entryText}>
                    {entryTextContent}
                </Text>
            </View>
            <View style={styles.physiqueContainer}>
                <View style={styles.heightContainer}>
                    <Text style={styles.heightTitleText}>
                        {/*In seperaten Container packen*/}
                    </Text>
                    <Text style={styles.heightText}>

                    </Text>
                </View>
                <View style={styles.weightContainer}>
                    <Text style={styles.weightTitleText}>

                    </Text>
                    <Text style={styles.weightText}>

                    </Text>
                </View>
            </View>
            
        </View>
    );
};

export default AboutSection;