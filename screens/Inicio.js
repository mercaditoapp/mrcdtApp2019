import React from 'react';
import { Text, Button, StyleSheet, Image, View, ScrollView } from 'react-native';
import { Card, CardItem, Thumbnail, Left, Body, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Inicio extends React.Component {
    static navigationOptions = {
      title: 'Mercadito',
      headerStyle: {
        backgroundColor: '#b92147',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    render() {
      return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Item rounded style={styles.buscador}>
            <Icon name={'ios-search'} size={25}
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
              }} />
            <Input placeholder='        Busca tu restaurante o receta favorita' />
          </Item>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://www.juanitas.com/wp-content/uploads/2017/09/juanita-slider.png' }} />
                <Body>
                  <Text>Chilaquiles Doña Juanita</Text>
                  <Button
                    title="Se te antojaron"
                    onPress={() => this.props.navigation.navigate('Receta')}
                  />
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody onPress={() => this.props.navigation.navigate('Receta')} >
              <Image
                source={{ uri: 'https://i.pinimg.com/564x/b3/48/2f/b3482f112646f39c624c531633af7b1b.jpg' }}
                style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'http://www.wellandpizza.com/wp-content/uploads/2017/11/lucianos_logo2.jpg' }} />
                <Body>
                  <Text>Pizza Sarten</Text>
                  <Text note>Se te antojaron</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: 'https://food-images.files.bbci.co.uk/food/recipes/alpine_pizza_32132_16x9.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0H4qF2HX5ivTJ_Dx_Ji-DPllAVLjFpEP51YEmSY3SNqpR8x1_' }} />
                <Body>
                  <Text>Aguachile</Text>
                  <Text note>Se te antojaron</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: 'http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/02/aguachilerojo.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
          </Card>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentContainer: {
      paddingTop: 3,
    },
    buscador: {
      marginTop: 3,
    }
  });