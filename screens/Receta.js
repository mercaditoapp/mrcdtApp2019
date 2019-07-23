import React from 'react';
import { StyleSheet, TouchableOpacity,  View, ActivityIndicator, } from 'react-native';
import { Container, Tab, Tabs, TabHeading, Icon, Text, } from 'native-base';

import Descripcion from '../components/Descripcion';
import Preparacion from '../components/Preparacion';

export default class Receta extends React.Component {
  
  //static recetaParam =  ({ navigation }) => navigation.getParam('payload');
  static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.payload.nombre });

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }
  
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { navigation } = this.props;
    const recetaParam = navigation.getParam('payload');

    return fetch('http://18.220.109.49:8080/mrcdtAPI/oauth/receta/findByNombreUrl/' + recetaParam.nombreUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
        console.log(responseJson.nombre)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {
      let receta = this.state.dataSource;
      return (
        <Container>
          <Tabs>
            <Tab
              heading={<TabHeading style={styles.tabs}>
                <Icon name="ios-today" style={{ color: '#b92147' }} />
                <Text style={styles.text}>Descripción</Text></TabHeading>}>
              <Descripcion navigation={this.props.navigation} payload={receta}/>           
            </Tab>
            <Tab
              heading={<TabHeading style={styles.tabs}>
                <Icon name="bonfire" style={{ color: '#b92147' }} />
                <Text style={styles.text}>Preparación</Text></TabHeading>}>
              <Preparacion navigation={this.props.navigation} payload={receta} />
            </Tab>
          </Tabs>
        </Container>
      );
    } 
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  tabs: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
  },

});