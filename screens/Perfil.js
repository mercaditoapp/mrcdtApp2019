import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Perfil extends React.Component {
  static navigationOptions = {
    title: 'Perfil',
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
          <Text style={{ fontSize: 40 }}>Perfil Screen</Text>
        <View>
        <Button
          title="Go to Metodos de Pago"
          onPress={() => this.props.navigation.navigate('MetodosPago')}
        />
        </View>
        <View>
        <Button
          title="Go to Direcciones"
          onPress={() => this.props.navigation.navigate('Direcciones')}
        />
        </View>
        <View>
        <Button
          title="Go to Datos Personales"
          onPress={() => this.props.navigation.navigate('DatosPersonales')}
        />
        </View>
        <Button
          title="Cerrar Sesión"
          onPress={() => this.props.navigation.navigate('IniciarSesion')}
        />
        </View>
        
      );
    }
  }