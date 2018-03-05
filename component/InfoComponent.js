import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Button from 'react-native-button';
import {DetailScreen, ThirdScreen} from "../ScreenName";
import Icon from 'react-native-vector-icons/Ionicons'

const backgroundColor = '#007256';

export default class InfoComponent extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Info';
        let tabBarIcon = () => {
            <Icon
                name='ios-home-outline'
                size={24}
                color='#007256'
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
                  This is info screen
              </Text>
          </View>
        );
    }
}