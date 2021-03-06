import React from 'react';
import Expo, {AppLoading, Asset, Font} from 'expo';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {Dimensions, Image, Text, View} from 'react-native';
import {DrawerItems, DrawerNavigator} from 'react-navigation';

import Components from './src/drawer/components';
import Pricing from './src/drawer/pricing';
import Settings from './src/drawer/settings';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const CustomDrawerContentComponent = props => (
    <View style={{ flex: 1, backgroundColor: '#ffff', opacity: 1 }}>
        <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
            <Text> iCarros </Text>
        </View>
        <View style={{ marginLeft: 10 }}>
            <DrawerItems {...props} />
        </View>
    </View>
);


const MainRoot = DrawerNavigator(
    {
        Login: {
            path: '/login',
            screen: Components,
            navigationOptions: { tabNavigationBar: false },
        },
        Pricing: {
            path: '/pricing',
            screen: Pricing,
        },
        Settings: {
            path: '/settings',
            screen: Settings,
        },
    },
    {
        // initialRouteName: 'Login',
        drawerWidth: SCREEN_WIDTH * 0.8,
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
);

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

export default class AppContainer extends React.Component {
    state = {
        isReady: false,
    };

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('./assets/images/bg_screen1.jpg'),
            require('./assets/images/bg_screen2.jpg'),
            require('./assets/images/bg_screen3.jpg'),
            require('./assets/images/bg_screen4.jpg'),
            require('./assets/images/user-cool.png'),
            require('./assets/images/user-hp.png'),
            require('./assets/images/user-student.png'),
            require('./assets/images/avatar1.jpg'),
        ]);

        const fontAssets = cacheFonts([FontAwesome.font, Ionicons.font]);

        await Promise.all([...imageAssets, ...fontAssets]);
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    // onError={console.warn}
                />
            );
        }

        return (
            <MainRoot />
        );
    }
}

Expo.registerRootComponent(AppContainer);
