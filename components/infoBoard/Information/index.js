import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import AboutSection from './AboutSection';
import BaseStatsSection from './BaseStatsSection';
import styles from './styles';

const Information = (props) => {

    return(
        <View style={styles.container}>
            <ScrollView style={styles.textContainer}>
                {/*<AboutSection />*/}
                <BaseStatsSection />
            </ScrollView>
        </View>
    )
};

export default Information;