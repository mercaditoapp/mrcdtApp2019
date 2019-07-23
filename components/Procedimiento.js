import React from 'react';
import { Text, ScrollView, StyleSheet, View, } from 'react-native';
import { Content, ListItem, Thumbnail, Left, Body, } from 'native-base';
import Video from 'react-native-video';

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
        <View style={styles.container}>
          <Video source={{ uri: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.24130-6/64734295_1534391286696395_6641024301463053278_n.mp4?_nc_cat=105&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_oc=AQnVRXncH7t3g3fED0pq3plKqV_vW98P9_XQybqY1AOawzZTXijR0ZfOSjeSR2EVOmA&_nc_ht=scontent-vie1-1.xx&oh=9b6bef3feffe6c97bdc19cce5a50e9f4&oe=5DB88685" }}   // Can be a URL or a localfile.
          style={{ width: 800, height: 800 }}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          volume={1.0}
          rate={1.0}
          ignoreSilentSwitch={"obey"}

        />
        </View>

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


