import React from 'react';
import {  Text, View, Button } from 'react-native';

export default class  Pedido extends React.Component {
  static navigationOptions = {
    title: 'Pedido',
    headerStyle: {
      backgroundColor: '#b92147',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Pedido Screen</Text>
        </View>
      );
    }
  }