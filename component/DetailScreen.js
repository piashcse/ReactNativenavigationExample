import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import {ThirdScreen} from "../ScreenName";
import Button from 'react-native-button'

export default class DetailScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        return(
            <View style={{
                flex: 1,
                backgroundColor: 'mediumseagreen',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                    color: 'white'
                }}>
                    {this.props.navigation.state.params.name}
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
                            navigation.navigate(ThirdScreen)
                        }}>
                    Navigate to Detail
                </Button>

            </View>
        );
    }
}