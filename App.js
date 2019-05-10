import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Inicio from './screen/Inicio';
import Receta from './screen/Receta';
import Pedido from './screen/Pedido';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const InicioStack = createStackNavigator({
  Inicio: { screen: Inicio },
  Receta: { screen: Receta },
  Pedido: { screen: Pedido },
}, {
    initialRouteName: 'Inicio',
  }
);

const AppContainer = createAppContainer(InicioStack);