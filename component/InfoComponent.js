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

const backgroundColor = '#007256';

export default class InfoComponent extends React.Component {
    static navigationOptions = ({navigation}) => {
        let drawableLabel = 'Info';
        let drawerIcon = () => (
            <Icon
                name='ios-information-circle-outline'
                size={26}
                color='#007256'
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
                        This is info screen
                    </Text>

                    <TouchableHighlight
                        style={{
                            margin: 20,
                            width: 200,
                            height: 45,
                            backgroundColor: 'darkviolet',
                            padding: 10,
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                        }}>
                            Go back to home
                        </Text>

                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}