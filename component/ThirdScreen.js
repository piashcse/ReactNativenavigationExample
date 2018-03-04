import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import {DetailScreen, ThirdScreen, MainScreen} from "../ScreenName";
import Button from 'react-native-button';

export default class MainComponent extends React.Component {
    render() {
        const { navigation } = this.props;
        return(
            <View style={{
                flex: 1,
                backgroundColor: 'tomato',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                    color: 'white'
                }}>
                    This is third screen
                </Text>

                <Button containerStyle={{
                    padding: 10,
                    margin: 20,
                    width: 200,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: 'darkviolet',
                }}
                        style={{
                            fontSize: 18,
                            color: 'white',
                        }}
                        onPress={() => {
                            navigation.navigate(MainScreen)
                        }}>
                    Navigate to Detail
                </Button>

            </View>
        );
    }
}