import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>Goalie</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText : {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,

    },

})