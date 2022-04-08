import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form:', form);
  };
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find youre best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="password"
          placeholder="Type your password"
          value={form.password}
          secureTextEntry
          onChangeText={value => setForm('password', value)}
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
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
