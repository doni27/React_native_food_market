import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Header, ItemListFood} from '../../components';

const OrderSumary = () => {
  return (
    <View>
      <Header
        title="Payment"
        subTitle="You Deserve better meal"
        onBack={() => {}}
      />
      <View>
        <Text>OrderSumary</Text>
        <ItemListFood image={FoodDummy1} items={14} />
      </View>
    </View>
  );
};

export default OrderSumary;

const styles = StyleSheet.create({});
