import React from 'react';
import { Text, View, StyleSheet,} from 'react-native';
import { Avatar, } from 'react-native-elements';
import { Container, Content, Icon, Input, DatePicker, Button, ListItem, Left, Body, } from 'native-base';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
    console.log("Edad:" + newDate)
  }
 

  render() {
    return (
      <Container>
        <Content>
          <Content>
            <Avatar
              rounded
              size="large"
              source={{ uri: 'https://i.pinimg.com/564x/4b/25/ec/4b25ececb830aeb5de490f990a41aa51.jpg' }}
              onPress={() => console.log("Nueva imagen de perfil")}
              containerStyle={{ flex: 1, marginLeft: '40%', marginTop: 15 }}
              showEditButton
            />
          </Content>
          <View style={{ flex: 1, alignItems: 'center', }}>
            <Text style={styles.textTitulo}>Nombre:</Text>
          </View>
          <ListItem icon >
            <Left>
              <Button
                style={{ backgroundColor: "#00ffff", fontSize: 50, marginLeft: 15, }}>
                <Icon active name="ios-contact" />
              </Button>
            </Left>
            <Body style={{ flex: 1, marginRight: 30,}}>
               <Input placeholder='Lousi Cortes' style={styles.imputText} />
            </Body>
          </ListItem>
          <Content>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <Text style={styles.textTitulo}>E-mail:</Text>
            </View>
            <ListItem icon >
            <Left>
              <Button
                style={{ backgroundColor: "#ffb6c1", fontSize: 50, marginLeft: 15, }}>
                <Icon active name="mail" />
              </Button>
            </Left>
            <Body style={{ flex: 1, marginRight: 30,}}>
               <Input placeholder='asdfghjklñ@gmai.com' style={styles.imputText} />
            </Body>
          </ListItem>
          </Content>
          <Content>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <Text style={styles.textTitulo}>Fecha de nacimiento:</Text>
            </View>
            <ListItem icon >
              <Left>
                <Button
                  style={{ backgroundColor: "#dda0dd", fontSize: 50, marginLeft: 15, }}>
                  <Icon active name="calendar" />
                </Button>
              </Left>
              <Body style={{ flex: 1, marginRight: 30, }}>
                <DatePicker
                  defaultDate={new Date(2019, 6, 13)}
                  minimumDate={new Date(1980, 1, 1)}
                  maximumDate={new Date(2019, 6, 13)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Seleccione fecha"
                  textStyle={{ color: "#00ced1" }}
                  placeHolderTextStyle={{ color: "#000000", 
                  fontSize: 17,
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginTop: 18, }}
                  onDateChange={this.setDate}
                  disabled={false}
                />
              </Body>
            </ListItem>
          </Content>
          <Content>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <Text style={styles.textTitulo}>Celular:</Text>
            </View>
            <ListItem icon>
            <Left>
              <Button
                style={{ backgroundColor: "#f0e68c", fontSize: 50, marginLeft: 15, }}>
                <Icon active name="ios-phone-portrait" />
              </Button>
            </Left>
            <Body style={{ flex: 1, marginRight: 30,}}>
               <Input placeholder='5694-7805-420-3' style={styles.imputText} />
            </Body>
          </ListItem>
          </Content>
          <Content>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <Text style={styles.textTitulo}>Genero:</Text>
            </View>
          </Content>
        </Content>
      </Container>
    );
  }
}
console.log()
const styles = StyleSheet.create({
  textTitulo: {
    fontSize: 20,
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  imputText:{
    flex:1,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 10,
  },
  bottonItem:{
    backgroundColor: "#00ffff", 
    height: 30, 
    marginTop: 20,
    width: 30,
    marginLeft: 10,
  },
});