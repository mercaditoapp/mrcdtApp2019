import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

export default class Inicio extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Inicio Screen</Text>
        <Button
          title="Go to Receta"
          onPress={() => this.props.navigation.navigate('Receta')}
        />
      </View>
    );
  }
}