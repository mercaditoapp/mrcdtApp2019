import React from 'react';
import { Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Avatar, ListItem} from 'react-native-elements';
import { Content } from 'native-base';
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
              containerStyle={{flex: 1, marginLeft: 15, marginTop: 15}}
              showEditButton
            />
        </Content>
       
        <Content style={{marginTop: 10}}>
        <Button
          title="Go to Metodos de Pago"
          onPress={() => this.props.navigation.navigate('MetodosPago')}
        />
        
        <Button
          title="Go to Direcciones"
          onPress={() => this.props.navigation.navigate('Direcciones')}
        />
       
        <Button
          title="Go to Datos Personales"
          onPress={() => this.props.navigation.navigate('DatosPersonales')}
        />
        
        <Button
          title="Cerrar Sesión"
          onPress={() => this.props.navigation.navigate('IniciarSesion')}
        />
        </Content>
        
     
      
        </ScrollView>
        
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    avatar: {
      fontSize: 20,
    },
    text: {
      color: '#000000',
      fontSize: 20,
      textAlign: 'center',
    },
    btnPedido: {
      backgroundColor:'#5cb85c',
      height: 40,
      borderRadius: 25,
      justifyContent: 'center',
    },
    btnText: {
      color: '#ffffff',
      fontSize: 19,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });