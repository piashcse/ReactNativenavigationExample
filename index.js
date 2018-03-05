import {AppRegistry} from 'react-native';
import {TabNavigator} from 'react-navigation';

import MainComponent from './component/MainComponent';
import InfoComponent from './component/InfoComponent';
import SettingsComponent from './component/SettingsComponent';
import CloudComponent from './component/CloudComponent'

import {Home, Cloud, Info, Settings} from "./ScreenName";

let routeConfig = {
    Home: {
        screen: MainComponent,
    },
    Info: {
        screen: InfoComponent,
    },
    Settings: {
        screen: SettingsComponent,
    },
    Cloud: {
        screen: CloudComponent,
    }
};

let tabNavigationConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: 'lightgray',
            padding: -10,
        }
    }
};

const App = TabNavigator(routeConfig, tabNavigationConfig);

AppRegistry.registerComponent('ReactNativenavigationExample', () => App);
