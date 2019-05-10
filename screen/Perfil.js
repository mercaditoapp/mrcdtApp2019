import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Perfil extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Perfil Screen</Text>
        <Button
          title="Go to Metodos de Pago"
          onPress={() => this.props.navigation.navigate('MetodosPago')}
        />
        <Button
          title="Go to Direcciones"
          onPress={() => this.props.navigation.navigate('Direcciones')}
        />
        <Button
          title="Go to Datos Personales"
          onPress={() => this.props.navigation.navigate('DatosPersonales')}
        />
        </View>
      );
    }
  }
