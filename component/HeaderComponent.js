import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import Button from 'react-native-button';

export default class HeaderComponent extends React.Component {
    render() {
        return(
            <View style={{
                height: 90,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <TouchableHighlight style={{
                    marginLeft: 10,
                    marginTop: 20,
                }}
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('DrawerOpen');
                }}>
                    <Image
                        style={{width: 32, height: 32}}
                        source={require('../images/ic_menu_black_24dp.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}