import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import AboutSection from './AboutSection';
import styles from './styles';

const Information = (props) => {

    return(
        <View style={styles.container}>
            <ScrollView style={styles.textContainer}>
                <AboutSection />
            </ScrollView>
        </View>
    )
};

export default Information;