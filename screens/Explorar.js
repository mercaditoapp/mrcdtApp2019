import React from 'react';
import { Text, Button, View,  } from 'react-native';


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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 50 }} >Explorar Screen</Text>
        <Button
          title="Go to Recetas"
          onPress={() => this.props.navigation.navigate('Recetas')}
        />
        </View>
      );
    }
  }