import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';

const FoodDetail = () => {
  return (
    <View>
      <ImageBackground
        source={FoodDummy1}
        style={styles.cover}></ImageBackground>
      <Text>Food Detail Page</Text>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  cover: {height: 330},
});
