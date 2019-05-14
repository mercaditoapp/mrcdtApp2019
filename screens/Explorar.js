import React from 'react';
import { Text, Button, View, StyleSheet, } from 'react-native';

import MenuItems from '../components/MenuItems';

export default class Explorar extends React.Component {
    static navigationOptions = {
      title: 'Explorar',
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
        <View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 50 }} >Explorar Screen</Text>
        <Button
          title="Go to Recetas"
          onPress={() => this.props.navigation.navigate('Recetas')}
        />
        </View>
        <View style={styles.menuContainer}>
        <MenuItems itemImage={require('../assets/desayuno.ex.jpg')}/>
        <MenuItems itemImage={require('../assets/ensalada.ex.jpg')}/>
        <MenuItems itemImage={require('../assets/entrada.ex.jpg')}/>
        <MenuItems/>
        <MenuItems/>
        <MenuItems/>
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    menuContainer: {
      height: '60%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  })