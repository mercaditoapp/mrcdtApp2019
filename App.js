import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import IniciarSesion from './screens/IniciarSesion';
import Inicio from './screens/Inicio';
import Receta from './screens/Receta';
import Preparacion from './components/Preparacion';
import Procedimiento from './components/Procedimiento';
import Pedido from './screens/Pedido';
import Explorar from './screens/Explorar';
import Recetas from './screens/Recetas';
import Perfil from './screens/Perfil';
import MetodosPago from './screens/MetodosPago';
import Direcciones from './screens/Direcciones';
import DatosPersonales from './screens/DatosPersonales';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const InicioStack = createStackNavigator({
  Inicio: { screen: Inicio },
  Receta: { screen: Receta }, 
  Preparacion: {screen: Preparacion},
  Procedimiento: {screen: Procedimiento},
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

const TabNavigator = createBottomTabNavigator({
  Inicio: InicioStack, 
  Explorar: ExplorarStack,
  Perfil: PerfilStack,
},
 {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Inicio') {
        iconName = `ios-home${tintColor ? '' : '-outline'}`;
      }
      if (routeName === 'Explorar') {
        iconName = `ios-compass${tintColor ? '' : '-outline'}`;
      }
      if (routeName === 'Perfil') {
        iconName = `ios-contact${tintColor ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={28} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#b92147',
    inactiveTintColor: 'gray',
  },
});

const SwitchNavigator = createSwitchNavigator({
  IniciarSesion: IniciarSesion,
  TabNavigator: TabNavigator,
})

const AppContainer = createAppContainer(SwitchNavigator);