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

const backgroundColor = '#964f8e';

export default class CloudComponent extends React.Component {
    static navigationOptions = ({navigation}) => {
        let drawableLabel = 'Cloud';
        let drawerIcon = () => (
            <Icon
                name='ios-cloud-done-outline'
                size={26}
                color='#964f8e'
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
                        This is cloud screen
                    </Text>
                </View>
            </View>
        );
    }
}