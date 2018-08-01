import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import {Container} from 'native-base';
export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={{
            height: 50,
            backgroundColor:'#2196f3',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
           
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 5 }}
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('DrawerOpen');
                }}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../Icons/MenuIcon.png')}
                />
            </TouchableHighlight>
            <Text style={{color: 'white', fontSize: 18,  }}>   Fisrt App</Text>
        </View>
        );
    }
}
