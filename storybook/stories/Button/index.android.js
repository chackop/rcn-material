import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';

export default function Button({ onPress, children }) {
  return <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableNativeFeedback>;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'blue',
  }
});

Button.defaultProps = {
  children: null,
  onPress: () => { },
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
