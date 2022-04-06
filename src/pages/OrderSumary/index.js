import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Header, ItemListFood, ItemValue, Button} from '../../components';
const OrderSumary = () => {
  return (
    <View>
      <Header
        title="Payment"
        subTitle="You Deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood image={FoodDummy1} items={14} />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="1.800.390" />
        <ItemValue label="Total Price" value="IDR 390.803.000" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Angga Rizky" />
        <ItemValue label="Phone No" value="0822" />
        <ItemValue label="Address" value="Setra Duta Palima" />
        <ItemValue label="House No." value="A5 Hook" />
        <ItemValue label="City" value="Bandung" />
      </View>
      <View style={styles.button}>
        <Button text="Checkout Now" />
      </View>
    </View>
  );
};

export default OrderSumary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
