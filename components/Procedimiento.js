import React from 'react';
import { Text, ScrollView, StyleSheet, View, } from 'react-native';
import { Content, ListItem, Thumbnail, Left, Body, } from 'native-base';

export default class Procedimiento extends React.Component {
  static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.payload.nombre });
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }
  render() {
    const { navigation } = this.props;
    const procedimiento = navigation.getParam('payload');
    return (
      <ScrollView>
        <Content>
          <Text style={styles.textTitulo}>INGREDIENTES</Text>
          {procedimiento.ingredientesProcedimiento.map((ingredienteProcedimiento, index) => {
            return <ListItem thumbnail key={index} style={styles.listItem}>
              <Left>
                <Thumbnail square source={{ uri: ingredienteProcedimiento.producto.imagen }} />
              </Left>
              <Body style={{ flex: 1, marginRight: 5, }}>
                <Text>{`${ingredienteProcedimiento.producto.nombre} ( ${ingredienteProcedimiento.cantidad} ${ingredienteProcedimiento.unidad.nombre} )`}</Text>
              </Body>
            </ListItem>
          })}
        </Content>
        <Content>
          <Text style={styles.textTitulo}>PASOS</Text>
          {procedimiento.pasos.map((pasos, index) => {
            return <ListItem key={index}>
              <Text>{`${pasos.indice}.-  ${pasos.descripcion}`}</Text>
            </ListItem>
          })}
        </Content>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  textTitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
  },
  listItem: {
    marginTop: 7,
  },
  container:{ flex: 1, justifyContent: "center"},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})


