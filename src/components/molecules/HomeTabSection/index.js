import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood, Rating} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '3%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);
const NewTaste = ({navigation}) => {
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};
const Popular = ({navigation}) => {
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};
const Recomended = ({navigation}) => {
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'popular'},
    {key: '3', title: 'Recomended'},
  ]);
  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recomended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
