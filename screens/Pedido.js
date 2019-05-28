import React from 'react';
import { View, ListView } from 'react-native';
import { Container, Content, Button, Icon, List, ListItem, Text, Card } from 'native-base';

const datas = [
  '500 grs. Peperoni / 1 pz. Peperoni ',
  '500 grs. Masa',
  '500 grs. Salsa de tomate',
  '500 grs. Queso Motzarella',
  '500 grs. Agua',
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
      listViewData: datas,
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
              <Card>
              <Text> Lo que estas llevando</Text>
              </Card>
      
              <Content>
                <List
                  leftOpenValue={75}
                  rightOpenValue={-75}
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
            </Container>
          );
        }
      }