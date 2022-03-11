import React from 'react'
import { View, Text, Pressable} from 'react-native'
import styles from "./styles"


const Header = () => {
    return (
        <View style={styles.container}>
            <Pressable 
            style={styles.button}
            onPress={() => {
                console.warn("About");
            }}
            >
                <Text style={styles.text}>About</Text>
            </Pressable>
            <Pressable 
            style={styles.button}
            onPress={() => {
                console.warn("Base Stats");
            }}
            >
                <Text style={styles.text}>Base Stats</Text>
            </Pressable>
            <Pressable
            style={styles.button}
            onPress={() => {
                console.warn("Evolution");
            }}
            >
                <Text style={styles.text}>Evolution</Text>
            </Pressable>
            <Pressable
            style={styles.button}
            onPress={() => {
                console.warn("Moves");
            }}
            >
                <Text style={styles.text}>Moves</Text>
            </Pressable>
        </View>
    );
};

export default Header;