import React from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import { Container, Content, Button, Icon, List, ListItem, Text, Card, CardItem, Body } from 'native-base';

const datas = [
  '500 grs. Peperoni',
  '500 grs. Masa',
  '500 grs. Salsa de tomate',
  '500 grs. Queso Motzarella',
  '500 grs. Agua',
];
const minimumSale =[
  '1 pz. Peperoni',
  '500 grs. Masa',
  '1 bote Salsa de tomate',
  '1 bolsa Queso Motzarella',
  '',
];

export default class Pedido extends React.Component {
  static navigationOptions = {
    title: 'Pedido',
    headerStyle: {
      backgroundColor: '#b92147',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,  minimumSale
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

        render() {
          const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
          return (
            <Container>
              <CardItem header bordered>
                <Text>Lo que estas llevando</Text>
              </CardItem>
              <Card style={styles.containerTitulos}>
                <Card style={styles.cardTitulos}>
                  <Text>Ingredientes para esta Receta</Text>
                </Card>
                <Card style={styles.cardTitulos}>
                  <Text>Tu pedido</Text>
                </Card>
                <Card style={styles.cardTitulos}>
                  <Text>$$</Text>
                </Card>
              </Card>

              <Card style={styles.container}>
                <Card style={styles.cardPedido}>
                <List
                  leftOpenValue={50}
                  rightOpenValue={-50}
                  dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                  renderRow={data =>
                    <ListItem>
                      <Text> {data} </Text>
                    </ListItem>}
                  renderLeftHiddenRow={data =>
                    <Button full onPress={() => alert('Este producto lo puedes borrar en caso de tenerlo en tu casa :D')}>
                      <Icon active name="information-circle" />
                    </Button>}
                  renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                    <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                      <Icon active name="trash" />
                    </Button>}
                />
                </Card>

                <Card style={styles.cardPedido}>
                <List
                  leftOpenValue={50}
                  rightOpenValue={-50}
                  dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                  renderRow={minimumSale =>
                    <ListItem>
                      <Text> {minimumSale} </Text>
                    </ListItem>}
                  renderLeftHiddenRow={data =>
                    <Button full onPress={() => alert('Este producto lo puedes borrar en caso de tenerlo en tu casa :D')}>
                      <Icon active name="information-circle" />
                    </Button>}
                  renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                    <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                      <Icon active name="trash" />
                    </Button>}
                />
                </Card>
                <Card style={styles.cardPedido}>
                  <Text>$100</Text>
                </Card>
              </Card>
            </Container>
          );
        }
      }
      const styles = StyleSheet.create({
        container: {
          flex: 2,
          flexDirection: 'row'
        },
        boxContainer: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center', 
        },
        cardPedido: {
          flex: 3,
        },
        containerTitulos: {
          flexDirection: 'row'
        },
        cardTitulos: {
          flexDirection: 'row',
          justifyContent: 'space-between'
        },
      })