import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Button from 'react-native-button';
import {DetailScreen, ThirdScreen} from "../ScreenName";
import Icon from 'react-native-vector-icons/Ionicons'

const backgroundColor = '#e97600';

export default class SettingsComponent extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Settings';
        let tabBarIcon = () => {
            <Icon
                name='ios-settings-outline'
                size={24}
                color='#e97600's
            />
        };
        return {
            tabBarLabel,
            tabBarIcon,
        }
    };

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Icon
                    name='ios-settings-outline'
                    size={24}
                    color='#e97600's
                />

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                    color: 'white',
                }}>
                    This is settings screen
                </Text>
            </View>
        );
    }
}