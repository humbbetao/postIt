import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import ButtonsTab from '../tabs/buttons';
import {Icon} from "react-native-elements";

const Components = TabNavigator(
    {
        ButtonsTab: {
            screen: ButtonsTab,
            path: '/buttons',
            navigationOptions: { tabBarVisible: false },
        },
    }
);

Components.navigationOptions = {
    drawerLabel: 'Home',
    header: null,
    swipeEnabled: false,
    tabBarVisible: false,
    drawerIcon: ({tintColor}) => (
        <Icon
            name="home"
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

// Workaround to avoid crashing when you come back on Components screen
// and you were not on the Buttons tab
export default StackNavigator(
    {
        ComponentsTabs: {screen: Components},
    },
    {headerMode: 'none'}
);
