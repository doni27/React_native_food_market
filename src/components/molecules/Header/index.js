import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subTitle}>{props.subTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },
});
