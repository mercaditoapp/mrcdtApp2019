import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class Preparacion extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading/>;
    }
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://hazgrandestuscomidas.com/blog/wp-content/uploads/2016/02/deliciosa-salsa-de-tomate-para-pizza-casera.jpg' }} />
              </Left>
              <Body>
                <Text>Salsa</Text>
                <Text note>Lavar los incredientes . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.recetaparapizzacasera.com/wp-content/uploads/2017/12/c%C3%B3mo-preparar-masa-para-pizza-1.jpg' }} />
              </Left>
              <Body>
                <Text>Masa</Text>
                <Text note>Prepara la masa . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}