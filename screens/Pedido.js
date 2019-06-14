import React from 'react';
import { ListView, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Content, Button, Icon, List, ListItem, Text, CardItem,  } from 'native-base';

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
  onePressed(){
    alert('Tu pedido esta listo :D');
  };
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
              <Content>
                <List
                  leftOpenValue={70}
                  rightOpenValue={-70}
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
              </Content> 
              <Content>
                <TouchableOpacity onPress={() => this.onePressed()} style={styles.btnFinPedido}  >
                  <Text style={styles.text}>Listo Finaliza tu pedido</Text>
                </TouchableOpacity>
              </Content>
           </Container>
          );
        }
      }
      
const styles = StyleSheet.create({
      btnFinPedido: {
        flex: 1,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#5cb85c',
        justifyContent: 'center',
        marginTop: 20,
      },
      text: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
      },
    })