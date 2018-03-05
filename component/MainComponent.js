import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Button from 'react-native-button';
import {DetailScreen, ThirdScreen} from "../ScreenName";
import Icon from 'react-native-vector-icons/Ionicons'

const backgroundColor = '#0067a7';

export default class MainComponent extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Home';
        let tabBarIcon = () => {
            <Icon
                size={24} color='#A1A7AB' name='logo-usd'
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
                    color: 'white'
                }}>
                    This is main screen
                </Text>

                {/*<Button containerStyle={{*/}
                    {/*padding: 10,*/}
                    {/*margin: 20,*/}
                    {/*width: 200,*/}
                    {/*height: 45,*/}
                    {/*borderRadius: 10,*/}
                    {/*backgroundColor: 'darkviolet',*/}
                {/*}}*/}
                        {/*style={{*/}
                            {/*fontSize: 18,*/}
                            {/*color: 'white',*/}
                        {/*}}*/}
                        {/*onPress={() => {*/}
                            {/*navigation.navigate(DetailScreen, dataTodetail);*/}
                        {/*}}>*/}
                    {/*Navigate to Detail*/}
                {/*</Button>*/}

                {/*<Button containerStyle={{*/}
                    {/*padding: 10,*/}
                    {/*margin: 20,*/}
                    {/*width: 200,*/}
                    {/*height: 45,*/}
                    {/*borderRadius: 10,*/}
                    {/*backgroundColor: 'darkviolet',*/}
                {/*}}*/}
                        {/*style={{*/}
                            {/*fontSize: 18,*/}
                            {/*color: 'white',*/}
                        {/*}}*/}
                        {/*onPress={() => {*/}
                            {/*navigation.navigate(ThirdScreen);*/}
                        {/*}}>*/}
                    {/*Navigate to third*/}
                {/*</Button>*/}
            </View>
        );
    }
}