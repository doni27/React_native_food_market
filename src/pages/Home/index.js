import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  FoodDummy4,
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  ProfileDummy,
} from '../../assets/Dummy';
import {FoodCard} from '../../components/molecules';
import {Gap} from '../../components';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarkett</Text>
          <Text style={styles.desc}>Lets get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
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
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  scene: {
    flex: 1,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  appName: {fontSize: 22, fontFamily: 'Poppins-medium', color: '#020202'},
  desc: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
