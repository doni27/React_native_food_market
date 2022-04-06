import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating} from '..';

/*
Type:
1. product
2. order-sumary
4.in-progress
3. past-orders
*/

const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {items} items . IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {items} items . IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {flex: 1},
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  date: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  status: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#D9435E'},
});
