import React from 'react';
import { Text, Button, View, StyleSheet, ScrollView, TouchacheOpacity} from 'react-native';

import MenuItems from '../components/MenuItems';


export default class Explorar extends React.Component {
    static navigationOptions = {
      title: 'Explorar',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#b92147',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    render() {
      return (
        <View style={styles.menuContainer}>
          <MenuItems itemImage={require('../assets/desayuno.ex.jpg')} />
          <MenuItems itemImage={require('../assets/ensalada.ex.jpg')} />
          <MenuItems itemImage={require('../assets/entrada.ex.jpg')} />
          <MenuItems itemImage={require('../assets/pasta.ex.jpg')} />
          <MenuItems itemImage={require('../assets/platoFuerte.ex.jpg')} />
          <MenuItems itemImage={require('../assets/postre.ex.jpg')} />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    menuContainer: {
      height: '35%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  })