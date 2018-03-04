import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

import MainComponent from './component/MainComponent';
import DetailLComponent from './component/DetailScreen';
import ThirdComponent from './component/ThirdScreen';

import {MainScreen, ThirdScreen, DetailScreen} from "./ScreenName";

const App = StackNavigator({
    MainScreen: {
        screen: MainComponent,
    },
    DetailScreen: {
        screen: DetailLComponent,
    },
    ThirdScreen: {
        screen: ThirdComponent,
    }
});

AppRegistry.registerComponent('ReactNativenavigationExample', () => App);
