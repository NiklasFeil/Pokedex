import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles';

const EvolutionSection = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.evoContainer}>
                <View style={styles.imageContainer}>
                    <Image 
                    source={require("../../../../assets/images/pokeball.png")}
                    style={styles.pokeballImage}
                    />
                    <Image 
                    source={require("../../../../assets/images/bulbasaur.png")}
                    style={styles.pokemonImage}
                    />
                </View>
                <Image
                    source={require("../../../../assets/images/arrow.png")}
                    style={styles.arrowImage}
                />
                <View style={styles.arrowTextContainer}>
                    <Text style={styles.arrowText}>
                        LVL 12
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image 
                    source={require("../../../../assets/images/pokeball.png")}
                    style={styles.pokeballImage}
                    />
                    <Image 
                    source={require("../../../../assets/images/bulbasaur.png")}
                    style={styles.pokemonImage}
                    />
                </View>
            </View>
            <View style={styles.evoContainer}>
            <View style={styles.imageContainer}>
                    <Image 
                    source={require("../../../../assets/images/pokeball.png")}
                    style={styles.pokeballImage}
                    />
                    <Image 
                    source={require("../../../../assets/images/bulbasaur.png")}
                    style={styles.pokemonImage}
                    />
                </View>
                <Image
                    source={require("../../../../assets/images/arrow.png")}
                    style={styles.arrowImage}
                />
                <View style={styles.imageContainer}>
                    <Image 
                    source={require("../../../../assets/images/pokeball.png")}
                    style={styles.pokeballImage}
                    />
                    <Image 
                    source={require("../../../../assets/images/bulbasaur.png")}
                    style={styles.pokemonImage}
                    />
                </View>
            </View>
        </View>
    );
}

export default EvolutionSection;