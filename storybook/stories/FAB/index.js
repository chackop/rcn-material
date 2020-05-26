import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Fab = ({ onPress }) => {
    return (
        <TouchableNativeFeedback style={styles.fab} onPress={onPress}>
            <Icon name='add-shopping-cart' color='black' size={24} />
        </TouchableNativeFeedback>
    )
}

export default Fab

const styles = StyleSheet.create({
    fab: {
        width: 56,
        height: 56,
        borderRadius: 28,
        elevation: 6,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
