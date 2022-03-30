import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.container}>
        <TextInput />
        <Gap height={16} />
        <TextInput />
        <Gap height={24} />
        <Button />
        <Gap height={12} />
        <Button />
        <Text>Sign In Page</Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
