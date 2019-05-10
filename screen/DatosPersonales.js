import React from 'react';
import { Text, View,  } from 'react-native';

export default class DatosPersonales extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Datos Personales Screen</Text>
        </View>
      );
    }
  }