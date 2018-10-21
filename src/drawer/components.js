import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import ButtonsTab from '../tabs/buttons';
import Pricing from "../views/pricing";

const Components = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: '/buttons'
    },
  },
  {
    initialRouteName: 'ButtonsTab',
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
    },
  }
);

Components.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="settings"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
  title: 'Home',
};

// Workaround to avoid crashing when you come back on Components screen
// and you were not on the Buttons tab
export default StackNavigator(
  {
    ComponentsTabs: { screen: Components },
  },
  {
    headerMode: 'none',
  },
);
