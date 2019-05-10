import React from 'react';
import {  Text, View, Button } from 'react-native';

export default class Recetas extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Recetas Screen</Text>
          <Button
          title="Go to Receta"
          onPress={() => this.props.navigation.navigate('Receta')}
        />
        </View>
      );
    }
  }