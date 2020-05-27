import React, { useState } from 'react'
import { StyleSheet, Text, View, Path, Animated } from 'react-native'

const ArcMotion = ({ x, y }) => {
    const containStyle = {
        position: 'absolute',
        left: x,
        top: y,
        width: 50,
        height: 50,
        right: null,
        bottom: null,
        background: '#FF0000AA'
    }

    const animatedStyle = () => {

    }

    return (
        <View>
            {/* <Path /> */}
            <Animated.View style={[containStyle, animatedStyle]} />
        </View>
    )
}

export default ArcMotion

const styles = StyleSheet.create({

})
