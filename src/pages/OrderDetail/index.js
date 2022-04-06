import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Header, ItemListFood, ItemValue, Button, Gap} from '../../components';

const OrderDetail = () => {
  return (
    <ScrollView>
      <View>
        <Header
          title="Payment"
          subTitle="You Deserve better meal"
          onBack={() => {}}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            type="order-summary"
            name="Sop Bumil"
            price="380.000"
            item={14}
            image={FoodDummy1}
            items={14}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
          <ItemValue label="Driver" value="IDR 50.000" />
          <ItemValue label="Tax 10%" value="1.800.390" />
          <ItemValue
            label="Total Price"
            value="IDR 390.803.000"
            valueColor="#1ABC9C"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value="Angga Rizky" />
          <ItemValue label="Phone No" value="0822" />
          <ItemValue label="Address" value="Setra Duta Palima" />
          <ItemValue label="House No." value="A5 Hook" />
          <ItemValue label="City" value="Bandung" />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Order Status:</Text>
          <ItemValue label="#FM2083743" value="Paid" valueColor="#1ABC9C" />
        </View>
        <View style={styles.button}>
          <Button
            text="Cancel Order"
            onPress={() => navigation.replace('SuccessOrder')}
            color="#D9435E"
            textColor="white"
          />
        </View>
        <Gap height={40} />
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

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
