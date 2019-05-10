import React from 'react';
import {  Text, View, Button } from 'react-native';

export default class  Receta extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Receta Screen</Text>
           <Button
            title="Go to Pedido"
            onPress={() => this.props.navigation.navigate('Pedido')}
          />
        </View>
      );
    }
  }