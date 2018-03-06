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

const backgroundColor = '#0067a7';

export default class MainComponent extends React.Component {
    static navigationOptions = ({navigation}) => {
        let drawableLabel = 'Home';
        let drawerIcon = () => (
           <Icon
                name='ios-home-outline'
                size={26}
                color='#0067a7'
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
                        This is main screen
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
                            const {navigate} = this.props.navigation;
                            navigate(Info);
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                        }}>
                            Navigate to info
                        </Text>

                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}