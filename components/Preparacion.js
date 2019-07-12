import React from 'react';
import { TouchableOpacity, ScrollView, View, ActivityIndicator, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
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
            return <ListItem thumbnail key={index} onPress={() => this.props.navigation.push('Procedimiento')}>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.pinimg.com/564x/ea/ce/a0/eacea05f533766cf0919c429fe65325f.jpg' }} />
              </Left>
              <Body>
                <Text>{procedimiento.nombre}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name={'ios-arrow-round-forward'} size={27} color={'#5cb85c'} />
                </Button>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
