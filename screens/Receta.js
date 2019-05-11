import React from 'react';
import {  Text, View, Button } from 'react-native';

export default class  Receta extends React.Component {
  static navigationOptions = {
    title: 'Receta',
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
          <Text style={{ fontSize: 40 }}>Receta Screen</Text>
           <Button
            title="Go to Pedido"
            onPress={() => this.props.navigation.navigate('Pedido')}
          />
        </View>
      );
    }
  }