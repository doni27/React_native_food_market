import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Rating} from '..';
import {FoodDummy1} from '../../../assets';

const ItemListFood = ({image}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 8,
        alignItems: 'center',
      }}>
      <Image
        source={image}
        style={{
          width: 60,
          height: 60,
          borderRadius: 8,
          overflow: 'hidden',
          marginRight: 12,
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            color: '#020202',
          }}>
          Soup Bumil
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 13,
            color: '#8D92A3',
          }}>
          IDR 289.000
        </Text>
      </View>
      <Rating />
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({});
