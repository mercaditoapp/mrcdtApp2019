import React from 'react';
import { ScrollView, StyleSheet, } from 'react-native';
import { Container, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Preparacion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let receta = this.props.payload;
    return (
      <ScrollView>
        <Container>
          {receta.procedimientos.map((procedimiento, index) => {
            return <ListItem thumbnail key={index} style={styles.listItem} onPress={() => this.props.navigation.push('Procedimiento', {
              payload: procedimiento
              })}>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.pinimg.com/564x/ea/ce/a0/eacea05f533766cf0919c429fe65325f.jpg' }} />
              </Left>
              <Body>
                <Text>{procedimiento.nombre}</Text>
              </Body>
              <Right>           
                  <Icon name={'ios-arrow-round-forward'} size={28} color={'#5cb85c'} />
              </Right>
            </ListItem>
          })
          }
        </Container>
      </ScrollView>

    )
  }
}
const styles = StyleSheet.create({
  listItem:{
    marginTop: 9,
  },
})

