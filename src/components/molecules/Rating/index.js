import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1, IcProfileOff, IcStarOff, IcStarOn} from '../../../assets';

const rating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
      </View>
      <Text>4.5</Text>
    </View>
  );
};

export default rating;

const styles = StyleSheet.create({
  ratingContainer: {flexDirection: 'row'},
  starContainer: {flexDirection: 'row'},
});
