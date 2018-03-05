import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Button from 'react-native-button';
import {DetailScreen, ThirdScreen} from "../ScreenName";

export default class MainComponent extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let header = ""; //hide toolbar
        let headerMode = 'screen';
        let headerTitle = 'Main';
        let headerTitleColor = {color: 'red'};
        let headerRight = (
        <Button containerStyle={{margin: 5, padding: 10, borderRadius: 10, backgroundColor: 'darkviolet'}}
                style={{fontSize: 15, color: 'white'}}
                onPress={() => {
                    params.onSave();
                }}>
            Save
        </Button>
        );
        return {
            header
        }
    };

    _onSave() {
        console.log('you pressed save!')
    }

    componentDidMount() {
        this.props.navigation.setParams({
            onSave: this._onSave.bind(this),
            isSaving: false,
        })
    }

    render() {
        const {navigation} = this.props;
        let dataTodetail = {
            name: 'abir',
            age: '18',
        }
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'dodgerblue',
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
                            navigation.navigate(DetailScreen, dataTodetail);
                        }}>
                    Navigate to Detail
                </Button>

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
                            navigation.navigate(ThirdScreen);
                        }}>
                    Navigate to third
                </Button>
            </View>
        );
    }
}