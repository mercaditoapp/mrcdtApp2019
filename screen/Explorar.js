import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Explorar extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Explorar Screen</Text>
        <Button
          title="Go to Recetas"
          onPress={() => this.props.navigation.navigate('Recetas')}
        />
        </View>
      );
    }
  }

  