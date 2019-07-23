import React from 'react';
import { ListView, TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';
import { Container, Content, Picker, ListItem, Text, CardItem, Thumbnail, Left, Body, Tab, Tabs, TabHeading, } from 'native-base';


export default class Pedido extends React.Component {
  static navigationOptions = {
    title: 'Pedido',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#b92147',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: "key0",
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    const { navigation } = this.props;
    const receta = navigation.getParam('payload');
    return (
      <Container>
        <View>
          <Text style={styles.textTitulo}> Lo que estas llevando</Text>
        </View>
        <CardItem style={{ padding: 0, }}>
          <View style={{ flex: 1, paddingTop: 0, }}>
            <Text style={styles.textPicker}>Porciones:</Text>
            <Picker
              note
              mode="dropdown"
              style={{ width: 90, height: 40, marginLeft: 160, }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="2 " value="key0" />
              <Picker.Item label="3 " value="key1" />
              <Picker.Item label="4 " value="key2" />
              <Picker.Item label="5 " value="key3" />
              <Picker.Item label="10 " value="key4" />
            </Picker>
          </View>
        </CardItem>
        <Body />
        <CardItem>
          <Content>
            <Tabs>
              <Tab heading={<TabHeading style={styles.colorTaps}><Text style={styles.textTap}>Receta</Text></TabHeading>}>
              </Tab>
              <Tab heading={<TabHeading style={styles.colorTaps}><Text style={styles.textTap}> M.V. </Text></TabHeading>}>
              </Tab>
              <Tab heading={<TabHeading style={styles.colorTaps}><Text style={styles.textTap}> Precio </Text></TabHeading>}>
              </Tab>
            </Tabs>
          </Content>
        </CardItem>


        <ScrollView>
          <Content>
            {
              receta.ingredientesReceta.map((ingredienteReceta, index) => {
                return <ListItem thumbnail key={index}>
                  <Left style={styles.imagen}>
                    <Thumbnail square source={{ uri: ingredienteReceta.producto.imagen }} />
                  </Left>
                  <Body style={{ flex: 1, marginRight: 5, }}>
                    <Text>{`${ingredienteReceta.producto.nombre}`}</Text>
                    <Text>{`${ingredienteReceta.cantidad} ${ingredienteReceta.unidad.nombre}       1 Bote           $15.00`} </Text>
                  </Body>
                </ListItem>
              })
            }
            <Content>
              <TouchableOpacity style={styles.btnFinPedido}
                onPress={() => this.props.navigation.navigate('SeguimientoPedido')}>
                <Text style={styles.textBtn}>Listo Finaliza tu pedido</Text>
              </TouchableOpacity>
            </Content>
          </Content>
        </ScrollView>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textTitulo: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',

  },
  textPicker: {
    fontSize: 16,
    textAlign: 'left',
    margin: 7,
    marginBottom: -30,
    marginLeft: 80,
  },
  colorTaps: {
    backgroundColor: '#fff',
  },
  textTap: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
  imagen: {
    marginLeft: -5,
  },
  btnFinPedido: {
    height: 40,
    width: 200,
    borderRadius: 25,
    backgroundColor: '#5cb85c',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 70,
    marginRight: 20,
  },
  textBtn: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

})