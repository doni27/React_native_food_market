import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Button Component</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {backgroundColor: '#FFC700', padding: 12, borderRadius: 8},
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
});
