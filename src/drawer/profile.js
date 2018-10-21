import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Profile from '../views/profile';

const ProfileDrawerItem = StackNavigator({
    Playground: { screen: Profile }
  },
);

ProfileDrawerItem.navigationOptions = {
    drawerLabel: 'iMatch',
    header: 'null',
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
    )
};

export default ProfileDrawerItem;
