import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Preparacion extends React.Component{
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

            <ListItem thumbnail onPress={() => this.props.navigation.push('Procedimiento')}>
              <Left>
                <Thumbnail square source={{ uri: 'http://hazgrandestuscomidas.com/blog/wp-content/uploads/2016/02/deliciosa-salsa-de-tomate-para-pizza-casera.jpg' }} />
              </Left>
              <Body>
                <Text>Salsa</Text>
                <Text note numberOfLines={1}>Lavar los incredientes . .</Text>
              </Body>
              <Right>
                <Button transparent >
                <Icon name={'ios-arrow-forward'} size={25} color={'#5cb85c'}/>
                </Button>
              </Right>
            </ListItem>
           
            <ListItem thumbnail onPress={() => this.props.navigation.push('Procedimiento')}>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.recetaparapizzacasera.com/wp-content/uploads/2017/12/c%C3%B3mo-preparar-masa-para-pizza-1.jpg' }} />
              </Left>
              <Body>
                <Text>Masa</Text>
                <Text note numberOfLines={1}>Prepara la masa . .</Text>
              </Body>
              <Right>
                <Button transparent >
                <Icon name={'ios-arrow-forward'} size={25} color={'#5cb85c'}/>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail onPress={() => this.props.navigation.push('Procedimiento')}>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.pinimg.com/564x/ec/63/bc/ec63bcaa0122a86eb78e075d8a6681c6.jpg' }} />
              </Left>
              <Body>
                <Text>Termiando</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => this.props.navigation.push('Procedimiento')}>
                <Icon name={'ios-arrow-forward'} size={25} color={'#5cb85c'}/>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}