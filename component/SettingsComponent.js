import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image,
} from 'react-native';
import Button from 'react-native-button';
import {Info} from "../ScreenName";
import Icon from 'react-native-vector-icons/Ionicons'
import HeaderComponent from '../component/HeaderComponent';

const backgroundColor = '#e97600';

export default class SettingsComponent extends React.Component {
    static navigationOptions = ({navigation}) => {
        let drawableLabel = 'Settings';
        let drawerIcon = () => (
            <Icon
                name='ios-hammer-outline'
                size={26}
                color='#e97600'
            />
        );
        return {
            drawerIcon,
            drawableLabel,
        }
    };

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <HeaderComponent {...this.props}/>
                <View style={{
                    flex: 1,
                    backgroundColor: backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 22,
                        color: 'white'
                    }}>
                        This is Settings screen
                    </Text>
                </View>
            </View>
        );
    }
}