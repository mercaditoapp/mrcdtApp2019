import React from 'react';
import { Text, Button, View, StyleSheet,} from 'react-native';

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
        <MenuItems itemImage={require('../assets/pasta.ex.jpg')}/>
        <MenuItems itemImage={require('../assets/platoFuerte.ex.jpg')}/>
        <MenuItems itemImage={require('../assets/postre.ex.jpg')}/>
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