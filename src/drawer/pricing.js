import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Pricing from '../views/pricing';

const PricingDrawerItem = StackNavigator({
  Pricing: {
    screen: Pricing,
    navigationOptions: ({ navigation }) => ({
      title: 'iMatch',
        color: '#000',
      headerLeft: (
        <Icon
          name="star"
          size={30}
          type="entypo"
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
});

PricingDrawerItem.navigationOptions = {
  drawerLabel: 'iMatch',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="star"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color='#000'
    />
  ),
};

export default PricingDrawerItem;
