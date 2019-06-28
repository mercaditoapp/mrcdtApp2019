import React from 'react';
import { Text, StyleSheet, } from 'react-native';
import { Container, Content, Body, ListItem, Left, } from 'native-base';
import { Checkbox } from 'react-native-paper';
import { AirbnbRating, } from 'react-native-elements';


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

            <AirbnbRating
              style={{ paddingVertical: 10 }}
              reviews={["Malo", "Hmm...", "Bueno", "Muy Bueno", "Exelente",]}
              onFinishRating={this.ratingCompleted}
              size={20}
              showRating
            />
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
});