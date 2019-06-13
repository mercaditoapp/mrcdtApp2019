import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, } from 'react-native-elements';
import { Content, ListItem, Icon, Left, Body, Right, Switch, Button } from 'native-base';
export default class Perfil extends React.Component {
  static navigationOptions = {
    title: 'Perfil',
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
      <ScrollView>
        <Content>
          <Avatar
            rounded
            size="large"
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
            onPress={() => console.log("Works!")}
            containerStyle={{ flex: 1, marginLeft: 15, marginTop: 15 }}
            showEditButton
          />
          <Text style={styles.textAvatar}>Carlos Romero</Text>
          <Text style={styles.textCorreo}>carlosromero@gmail.com</Text>
        </Content>

       

        <Content style={styles.contenLisItem}>
          <ListItem icon onPress={() => this.props.navigation.navigate('MetodosPago')}>
            <Left>
              <Button onPress={() => this.props.navigation.navigate('MetodosPago')}
                style={{ backgroundColor: "#FF9501", fontSize: 50 }}>
                <Icon active name="card" />
              </Button>
            </Left>
            <Body>
              <Text>Metodos de Pago</Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => this.props.navigation.navigate('Direcciones')}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF", fontSize: 50 }}>
                <Icon active name="locate" />
              </Button>
            </Left>
            <Body>
              <Text>Mis Direcciones</Text>
            </Body>
            <Right>
              <Text>Agregalas</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon onPress={() => this.props.navigation.navigate('DatosPersonales')}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF", fontSize: 50 }}>
                <Icon active name="paper" />
              </Button>
            </Left>
            <Body>
              <Text>Datos Personales</Text>
            </Body>
            <Right>
              <Text>Modificalos</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon onPress={() => this.props.navigation.navigate('IniciarSesion')}>
            <Left>
              <Button onPress={() => this.props.navigation.navigate('MetodosPago')}
                style={{ backgroundColor: "#FF9501", fontSize: 50 }}>
                <Icon active name="redo" />
              </Button>
            </Left>
            <Body>
              <Text>Cerrar Sesión</Text>
            </Body>
          </ListItem>
        </Content>
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
  contenLisItem: {
    flex: 1,
    marginTop: 10
  },
  textAvatar: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'right',
    marginRight: 135,
    marginTop: -43
  },
  textCorreo: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'right',
    marginRight: 50,
    marginTop: 1
  },

});