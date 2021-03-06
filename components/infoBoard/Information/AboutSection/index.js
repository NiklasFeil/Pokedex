import React from 'react'
import { View, Text } from 'react-native'
import styles from "./styles"
import { Shadow } from 'react-native-shadow-2';

const AboutSection = (props) => {

    const entryTextContent = "CHARIZARD flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself"
    //Daten von Ditto
    const pokemonHeight = 3;
    const pokemonWeight = 40;

    return (
        <View style={styles.container}>
            <View style={styles.entryTextContainer}>
                <Text style={styles.entryText}>
                    {entryTextContent}
                </Text>
            </View>
            <Shadow style={styles.physiqueShadow}
            distance={5}
            startColor={'#00000030'}
            containerViewStyle={{marginVertical: 20}}
            radius={20}>
                <View style={styles.physiqueContainer}>
                    <View style={styles.heightContainer}>
                        <Text style={styles.heightTitleText}>
                            Height
                        </Text>
                        <Text style={styles.heightText}>
                            {pokemonHeight / 10} m
                        </Text>
                    </View>
                    <View style={styles.weightContainer}>
                        <Text style={styles.weightTitleText}>
                            Weight
                        </Text>
                        <Text style={styles.weightText}>
                            {pokemonWeight / 10} kg
                        </Text>
                    </View>
                </View>
            </Shadow>
        </View>
    );
};

export default AboutSection;