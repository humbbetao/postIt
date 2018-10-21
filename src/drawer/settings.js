import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Settings from '../views/settings';

const SettingsDrawerItem = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Perfil',
      headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: '#fff',
      },
        color: '#000',
      headerLeft: (
        <Icon
          name="user"
          size={30}
          type="entypo"
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
});

SettingsDrawerItem.navigationOptions = {
  drawerLabel: 'Perfil',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="user"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="entypo"
      color='#000'
    />
  ),
};

export default SettingsDrawerItem;
