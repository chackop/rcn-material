import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Fab = ({ onPress }) => {
    const ripple = TouchableNativeFeedback.Ripple('#AAF', false)
    const [pressed, setPressed] = useState(false)
    const elevation = pressed ? 13 : 6

    return (
        <View style={[styles.fab, { elevation }]}>
            <TouchableNativeFeedback
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
                background={ripple} onPress={onPress}>
                <View style={styles.iconContainer}>
                    <Icon name='add-shopping-cart' color='black' size={24} />
                </View>
            </TouchableNativeFeedback>
        </View>
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
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
