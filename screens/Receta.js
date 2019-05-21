import React from 'react';
import {StyleSheet, } from 'react-native';
import {Container, Tab, Tabs, TabHeading, Icon, Text} from 'native-base';

import Tab1 from '../components/Descripcion';
import Tab2 from '../components/Preparacion';


export default class Receta extends React.Component {
  static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.otherParam })
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }
  componentDidMount() {
    return fetch('http://34.210.212.235:8080/mrcdtAPI/oauth/receta/findAll', {
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
      })
      .catch((error) => {
        console.log(error)
      });
  }
  render() {
    const { navigation } = this.props;
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <Container>

        <Tabs>
          <Tab
            heading={<TabHeading style={styles.tabs}>
              <Icon name="ios-today" style={{ color: '#b92147' }} />
              <Text style={styles.text}>Descripción</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab 
          heading={<TabHeading style={styles.tabs}>
          <Icon name="bonfire" style={{ color: '#b92147' }} />
          <Text style={styles.text}>Preparación</Text></TabHeading>}>
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
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