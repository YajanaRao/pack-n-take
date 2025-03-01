import React from 'react';
import {ScrollView, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {width} from '../config/Style';
import StoreProductCard from '../components/PT/StoreProductCard';
const Tab = createMaterialTopTabNavigator();

const Browse = () => {
  return (
    <>
      <Header title="Browse" />
      <Tab.Navigator>
        <Tab.Screen
          name="Packs"
          component={ProductCards}
          options={{title: 'Packs'}}
        />
        <Tab.Screen
          name="Stores"
          component={StoreProductCards}
          options={{title: 'Stores'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default Browse;

function ProductCards() {
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductCard cardStyle={{width: width - 30}} />
        <ProductCard cardStyle={{width: width - 30}} productImg={DISH_IMG} />
        <ProductCard cardStyle={{width: width - 30}} />
      </ScrollView>
    </View>
  );
}
function StoreProductCards() {
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoreProductCard cardStyle={{width: width - 30}} />
        <StoreProductCard
          cardStyle={{width: width - 30}}
          productImg={DISH_IMG}
        />
        <StoreProductCard cardStyle={{width: width - 30}} />
      </ScrollView>
    </View>
  );
}
