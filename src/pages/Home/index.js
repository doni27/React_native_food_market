import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
} from '../../assets/Dummy';
import {Gap} from '../../components';
import {
  FoodCard,
  HomeProfile,
  HomeTabSection,
} from '../../components/molecules';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              <FoodCard image={FoodDummy1} />
              <FoodCard image={FoodDummy3} />
              <FoodCard image={FoodDummy2} />
              <FoodCard image={FoodDummy4} />
              <Gap width={24} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },

  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
