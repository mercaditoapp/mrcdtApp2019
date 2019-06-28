import React from 'react';
import { Text, StyleSheet, } from 'react-native';
import { Container, Content, Body, ListItem, Left, Input } from 'native-base';
import { Checkbox, List, } from 'react-native-paper';
import { AirbnbRating, Avatar} from 'react-native-elements';

export default class SeguimientoPedido extends React.Component {
  static navigationOptions = {
    title: 'Chedraui - Las Americas',
    headerStyle: {
      backgroundColor: '#fff',
      textAlign: 'center',
    },
    headerTintColor: '#b92147',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  state = {
    checked: false,
    dataPedido: [
      {
        idx: 1,
        label: 'Tu OH recivio tu pedido',
        value: 'Proceso 1 Terminado',
        checked: true,
      },
      {
        idx: 2,
        label: 'Está recolectando los productos de tu Pedido',
        value: 'Proceso 2 Terminado',
        checked: false,
      },
      {
        idx: 3,
        label: 'Pedido completo',
        value: 'Proceso 3 Terminado',
        checked: false,
      },
      {
        idx: 4,
        label: 'EL IH recogerá tu Pedido',
        value: 'Proceso 4 Terminado',
        checked: false,
      },
      {
        idx: 5,
        label: 'Tu IH llegará a tu drección',
        value: 'Proceso 5 Terminado',
        checked: false,
      },
      {
        idx: 6,
        label: 'Puedes calificar a tu OH y IH',
        value: 'Proceso 6 Terminado',
        checked: false,
      },
    ]
  };
  toggleCheckbox(idx) {
    const changedCheckbox = this.state.dataPedido.find((cb) => cb.idx === idx);
    changedCheckbox.checked = !changedCheckbox.checked; const checkboxes = Object.assign({},
      this.state.dataPedido, changedCheckbox);
    this.setState({ checkboxes });
  }
  ratingCompleted(rating) {
    console.log("La calificación es:" + rating)
  }
  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <Text style={styles.textContentList}> Entrega estimada: 1 hora </Text>
          {this.state.dataPedido.map(pedido =>
            <ListItem icon key={pedido.idx}>
              <Left>
                <Checkbox
                  status={pedido.checked ? 'checked' : 'unchecked'}
                  onPress={() => this.toggleCheckbox(pedido.idx)}
                />
              </Left>
              <Body style={{ marginRight: 30 }}>
                <Text style={styles.textBody}>{pedido.label}</Text>
              </Body>
            </ListItem>
          )}
          <Content>
          <List.Section title="Califica a tus IH y OH">
              <List.Accordion
                title="OH:"
                left={props => <List.Icon {...props} icon="motorcycle" />}
              >
                <Content style={{ marginBottom: 15 }}>
                  <Avatar
                    rounded
                    size="small"
                    source={{ uri: 'https://i.pinimg.com/564x/4b/25/ec/4b25ececb830aeb5de490f990a41aa51.jpg' }}
                    containerStyle={{ flex: 1, marginLeft: 15, marginTop: 15 }}
                    showEditButton
                  />
                  <Text style={styles.textAvatar}>Louisa Mota</Text>
                </Content>
                <Text style={styles.textItem}>Deseas dejarle un mensaje:</Text>
                <Body style={{ flex: 1, margin: 10 }}>
                  <Input placeholder='Escribele algo si lo deceas' style={styles.imputText} />
                </Body>
                <Text style={styles.textItem}>Puedes calificar a tu OH:</Text>
                <AirbnbRating
                  style={{ paddingVertical: 10 }}
                  reviews={["Malo", "Hmm...", "Bueno", "Muy Bueno", "Exelente",]}
                  onFinishRating={this.ratingCompleted}
                  textStyle={{ fontSize: 18 }}
                  size={20}
                />
              </List.Accordion>
              <List.Accordion
                title="IH:"
                left={props => <List.Icon {...props} icon="shopping-cart" />}
                expanded={this.state.expanded}
                onPress={this._handlePress}
              >
                <Content style={{ marginBottom: 15 }}>
                  <Avatar
                    rounded
                    size="small"
                    source={{ uri: 'https://i.pinimg.com/564x/4b/25/ec/4b25ececb830aeb5de490f990a41aa51.jpg' }}
                    containerStyle={{ flex: 1, marginLeft: 15, marginTop: 15 }}
                    showEditButton
                  />
                  <Text style={styles.textAvatar}>Carlos Romero</Text>
                </Content>
                <Text style={styles.textItem}>Deseas dejarle un mensaje:</Text>
                <Body style={{ flex: 1, margin: 10 }}>
                  <Input placeholder='Escribele algo si lo deceas' style={styles.imputText} />
                </Body>
                <Text style={styles.textItem}>Puedes calificar a tu IH:</Text>
                <AirbnbRating
                  style={{ paddingVertical: 10 }}
                  reviews={["Malo", "Hmm...", "Bueno", "Muy Bueno", "Exelente",]}
                  onFinishRating={this.ratingCompleted}
                  textStyle={{ fontSize: 18 }}
                  size={20}
                />
              </List.Accordion>
            </List.Section>
          </Content>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginLeft: 5,
    marginTop: 15
  },
  textContentList: {
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  textBody: {
    fontSize: 18,
  },
  imputText: {
    fontSize: 18,
    marginLeft: -70,
  },
  textItem: {
    fontSize: 18,
  },
  textAvatar: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'right',
    marginRight: 125,
    marginTop: -20
  },
});