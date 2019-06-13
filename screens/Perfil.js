import React from 'react';
import { Text, StyleSheet, ScrollView, } from 'react-native';
import { Avatar, } from 'react-native-elements';
import { Content, ListItem, Icon, Left, Body, Right, Button } from 'native-base';
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
            source={{ uri: 'https://i.pinimg.com/564x/4b/25/ec/4b25ececb830aeb5de490f990a41aa51.jpg' }}
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
                style={{ backgroundColor: "#00ffff", fontSize: 50 }}>
                <Icon active name="card" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textBody}>Metodos de Pago</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={() => this.props.navigation.navigate('Direcciones')}
          style={{ marginTop: 2}}>
            <Left>
              <Button style={{ backgroundColor: "#ffb6c1", fontSize: 50 }}>
                <Icon active name="locate" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textBody}>Mis Direcciones</Text>
            </Body>
            <Right>
              <Text>Agregalas</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => this.props.navigation.navigate('DatosPersonales')}
          style={{ marginTop: 2}}>
            <Left>
              <Button style={{ backgroundColor: "#dda0dd", fontSize: 50 }}>
                <Icon active name="paper" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textBody}>Datos Personales</Text>
            </Body>
            <Right>
              <Text>Modificalos</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => this.props.navigation.navigate('IniciarSesion')}
          style={{ marginTop: 2}}>
            <Left>
              <Button onPress={() => this.props.navigation.navigate('MetodosPago')}
                style={{ backgroundColor: "#ffa07a", fontSize: 50 }}>
                <Icon active name="redo" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textBody}>Cerrar Sesión</Text>
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
  textBody:{
    fontSize: 16,
  },

});