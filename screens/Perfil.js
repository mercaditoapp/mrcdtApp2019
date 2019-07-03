import React from 'react';
import { Text, StyleSheet, ScrollView, View, Image, } from 'react-native';
import { Content, ListItem, Icon, Left, Body, Right, Button } from 'native-base';

const usuario = {
  nombre: 'Carlos Romero',
  edad: '22',
  pais: 'Mexico',
  correo: 'carlosromero@gmail.com',
  telefono: '05426892',
  fechaNacimento: '22/10/1997',
}
const mostrarInfo = ({nombre, correo,}) => {
  console.log(`Nombre: ${nombre}, Correo: ${correo},`);
}
mostrarInfo(usuario);

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
    const { nombre, correo, } = usuario;
    return (
      <ScrollView>
        <View style={styles.speakerContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://i.pinimg.com/564x/ec/e9/6e/ece96eae936146b9d31bb090165934db.jpg" }}
          />
          <View style={styles.speakerDetailsContainer}>
            <Text style={styles.speakerName}>{nombre}</Text>
            <Text style={styles.speakerCorreo}>{correo}</Text>
          </View>
        </View>
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
          style={styles.espaciosItem}>
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
          style={styles.espaciosItem}>
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
          style={styles.espaciosItem}>
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
const IMAGE_SIZE = 80;

const styles = StyleSheet.create({
  speakerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row"
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    backgroundColor: "grey",
    marginRight: 5
  },
  speakerDetailsContainer: {
    justifyContent: "center"
  },
  speakerName: {
    color: "purple",
    fontSize: 20,
    fontWeight: "500"
  },
  speakerCorreo: {
    fontSize: 18
  },
  contenLisItem: {
    flex: 1,
    marginTop: 10
  },
  textBody:{
    fontSize: 16,
  },
  espaciosItem:{
    marginTop: 2
  },
});