import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import AboutSection from './AboutSection';
import BaseStatsSection from './BaseStatsSection';
import EvolutionSection from './EvolutionSection';
import styles from './styles';

const Information = (props) => {

    return(
        <View style={styles.container}>
            <ScrollView style={styles.textContainer}>
                {/*<AboutSection />*/}
                {/*<BaseStatsSection />*/}
                <EvolutionSection />
            </ScrollView>
        </View>
    )
};

export default Information;