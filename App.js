import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Inicio from './screen/Inicio';
import Receta from './screen/Receta';
import Pedido from './screen/Pedido';
import Explorar from './screen/Explorar';
import Recetas from './screen/Recetas';
import Perfil from './screen/Perfil';
import MetodosPago from './screen/MetodosPago';
import Direcciones from './screen/Direcciones';
import DatosPersonales from './screen/DatosPersonales';


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


const ExplorarStack = createStackNavigator({
  Explorar: { screen: Explorar },
  Recetas: { screen: Recetas },
  Receta: { screen: Receta },
  Pedido: { screen: Pedido },
}, {
    initialRouteName: 'Explorar',
  }
);

const PerfilStack = createStackNavigator({
  Perfil: { screen: Perfil },
  MetodosPago: { screen: MetodosPago },
  DatosPersonales: { screen: DatosPersonales },
  Direcciones: { screen: Direcciones },
  
}, {
    initialRouteName: 'Perfil',
  }
);

const AppContainer = createAppContainer(PerfilStack);

