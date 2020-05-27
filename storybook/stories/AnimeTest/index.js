import React from 'react'
import { StyleSheet, Text, Image, View, Animated, Easing } from 'react-native'
import FAB from '../FAB/index';

const AnimeTest = () => {
    // const opac = 0.5;
    // const opac = new Animated.Value(0);
    const tranx = new Animated.Value(-200);

    const onPress = () => {
        Animated.timing(tranx, {
            toValue: 200,
            duration: 2000,
            easing: Easing.bounce,
        }).start();
    };

    return (
        <View style={styles.imageContain}>
            <Animated.Image
                style={[styles.image, {
                    transform: [{
                        tranx
                    }]
                }]}
                source={require('../../../assets/images/splash.png')}
            />
            <FAB onPress={onPress} />
        </View>
    )
}

export default AnimeTest

const styles = StyleSheet.create({
    imageContain: {
        width: 360,
        height: 360
    },
    image: {

    }
})
