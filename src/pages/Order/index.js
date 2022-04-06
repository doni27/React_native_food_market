import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {EmptyOrder, Header} from '../../components';
import OrderTabSection from '../../components/molecules/OrderTabSection';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Order" subTitle="wait for the best meals" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  tabContainer: {flex: 1, marginTop: 24},
});
