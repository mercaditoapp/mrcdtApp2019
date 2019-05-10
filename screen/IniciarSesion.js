import React from 'react';
import { Button, View, Text } from 'react-native';

export default class IniciarSecion extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Iniciar Secion</Text>
        <Button
          title="Iniciar Seción"
          onPress={() => this.props.navigation.navigate('TabNavigator')}
        />
      </View>
    );
  }
}