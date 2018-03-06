import {AppRegistry, Dimensions} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import HomeComponent from './component/MainComponent';
import InfoComponent from './component/InfoComponent';
import SettingsComponent from './component/SettingsComponent';
import CloudComponent from './component/CloudComponent';

import { Home, Info, Settings, Cloud } from "./ScreenName";

var {height, width} = Dimensions.get('window');

let routeConfig = {
    Home: {
        path: '/',
        screen: HomeComponent,
    },
    Info: {
        path: '/info',
        screen: InfoComponent,
    },
    Settings: {
        screen: SettingsComponent,
    },
    Cloud: {
        screen: CloudComponent,
    }
};

let drawerNavigationConfig = {
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
        activeTintColor: 'red',
    }
};

const App = DrawerNavigator(routeConfig, drawerNavigationConfig);


AppRegistry.registerComponent('ReactNativenavigationExample', () => App);
