import React from 'react'
import { StyleSheet, Text, Image, View, Animated, Easing, Slider } from 'react-native'
import FAB from '../FAB/index';

const AnimeTest = () => {
    // const opac = 0.5;
    // const opac = new Animated.Value(0);
    const progress = new Animated.Value(0);
    const tranx = new Animated.Value(-200);

    // const tranx = process.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [-200, 200],
    // });

    // const width = process.interpolate({
    //     inputRange: [0, 0.5, 1],
    //     outputRange: [50, 150, 150],
    // });

    // const height = width

    const onPress = () => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 2000,
            // easing: Easing.bounce,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
        }).start();
    };

    const onSliderChange = () => {
        progress.setValue(v);
    }

    return (
        <View style={styles.imageContain}>
            <Animated.Image
                style={[styles.image, {
                    // width,
                    // height,
                    // transform: [{
                    //     tranx
                    // }]
                }]}
                source={require('../../../assets/images/splash.png')}
            />
            <FAB onPress={onPress} />
            <Slider style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                onValueChange={onSliderChange} />
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

    },
    slider: {

    }
})
