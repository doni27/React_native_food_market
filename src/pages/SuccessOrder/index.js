import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = () => {
  return (
    <View style={styles.page}>
      <IlSuccessOrder />
      <Gap height={30} />
      <Text style={styles.title}>You've Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitile}>Just stay at home while we are</Text>
      <Text style={styles.subTitile}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Order Other Food"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={12} />
      <View style={styles.buttonContainer}>
        <Button
          text="View My Order"
          onPress={() => navigation.replace('MainApp')}
          color="#8D92A3"
          textColor="white"
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subTitile: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
