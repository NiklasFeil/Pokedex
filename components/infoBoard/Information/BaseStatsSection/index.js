import React from "react"
import { View, Text } from "react-native"
import styles from "./styles";

const BaseStatsSection = (props) => {

    //Charizard's Base Stats
    const baseStats = {
        HP: 78,
        ATK: 84, 
        DEF: 78,
        SPATK: 109,
        SPDEF: 85,
        SPD: 100
    };

    const maxStats = {
        HP: 496,
        ATK: 190,
        DEF: 230,
        SPATK: 180,
        SPDEF: 230,
        SPD: 180
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Base Stats:
            </Text>
            <View style={styles.baseStatsContainer}>
                {Object.entries(baseStats).map(([stat, value]) => {

                    const barPercentage = Math.floor(value / maxStats[stat] * 100) / 100;
                    
                    const barWidth = barPercentage * 100 + "%"

                    return (
                        <View style={styles.statContainer}>
                            <Text>
                                {stat}
                            </Text>
                            <View style={styles.maxBar}>
                                <View style={[styles.statBar, {width: barWidth}]}>
                                    <Text style={styles.valueText}>
                                        {value}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default BaseStatsSection;