import React from 'react';
import { Text, View, StyleSheet,} from 'react-native';
import { Container, Header, Content, Icon,  Item, Input, DatePicker } from 'native-base';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Container>
   
        <Content>
          <View style={{ flex: 1, alignItems: 'center', }}>
            <Text style={styles.text}>Nombre:</Text>
          </View>
          <Content>
            <Item style={{ flex: 1, marginLeft: 30, marginRight: 30, }}>
              <Icon active name='ios-contact' style={styles.iconC} />
              <Input placeholder='Lousi Cortes' style={styles.imputC} />
            </Item>
          </Content>
          <Content>
          <View style={{ flex: 1, alignItems: 'center', }}>
            <Text style={styles.text}>E-mail:</Text>
          </View>
          <Content>
            <Item style={{ flex: 1, marginLeft: 30, marginRight: 30, }}>
              <Icon active name='mail' style={styles.iconC} />
              <Input placeholder='asdfghjklñ@gmai.com' style={styles.imputC} />
            </Item>
          </Content>
        </Content>
        <Content>
          <View style={{ flex: 1, alignItems: 'center', }}>
            <Text style={styles.text}>Fecha de nacimiento:</Text>
          </View>
          <Content>
            <Item style={{ flex: 1, marginLeft: 30, marginRight: 30, }}>
              <Icon active name='calendar' style={styles.iconC} />
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
                placeHolderTextStyle={{ color: "#000000" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item>
          </Content>
        </Content>
        <Content>
          <View style={{ flex: 1, alignItems: 'center', }}>
            <Text style={styles.text}>Celular:</Text>
          </View>
          <Content>
            <Item style={{ flex: 1, marginLeft: 30, marginRight: 30, }}>
              <Icon active name='ios-phone-portrait' style={styles.iconC} />
              <Input placeholder='5694-7805-420-3' style={styles.imputC} />
            </Item>
          </Content>
        </Content>
        <Content>
          <View style={{ flex: 1, alignItems: 'center', }}>
            <Text style={styles.text}>Genero:</Text>
          </View>
          <Content>
            <Item style={{ flex: 1, marginLeft: 30, marginRight: 30, }}>
              <Icon active name='ios-phone-portrait' style={styles.iconC} />
              <Input placeholder='5694-7805-420-3' style={styles.imputC} />
            </Item>
          </Content>
        </Content>

        </Content>
      </Container>
    );
  }
}
console.log()
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20,
  },
  imputC:{
    flex:1,
  },
  iconC:{
    marginLeft: 10,
    marginRight: 5,
  },
});