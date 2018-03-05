import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Button from 'react-native-button';
import {DetailScreen, ThirdScreen} from "../ScreenName";
import Icon from 'react-native-vector-icons/Ionicons'

const backgroundColor = '#964f8e';

export default class CloudComponent extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Cloud';
        let tabBarIcon = () => {
            <Icon
                name='ios-cloud-outline'
                size={24}
                color='#964f8e'
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
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                    color: 'white',
                }}>
                    This is Cloud screen
                </Text>
            </View>
        );
    }
}