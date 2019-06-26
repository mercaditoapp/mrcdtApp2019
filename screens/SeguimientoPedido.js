import React from 'react';
import { Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Container, Content, Header, Body, ListItem, Icon, Left, Right, } from 'native-base';
import CheckboxGroup from 'react-native-checkbox-group';
import { AirbnbRating,  } from 'react-native-elements';

const dataPedido = [
  {
    label: 'Tu OH recivio tu pedido',
    value: 'paso 1 LISTO',
    RNchecked: true
  },
  {
    label: 'Está recolectando los productos de tu Pedido',
    value: 'paso 2 LISTO'
  },
  {
    label: 'Pedido completo',
    value: 'paso 3 LISTO'
  },
  {
    label: 'EL IH recogerá tu Pedido',
    value: 'paso 4 LISTO'
  },
  {
    label: 'Tu IH llegará a tu drección',
    value: 'paso 5 LISTO'
  },
  {
    label: 'Puedes calificar a tu OH y IH',
    value: 'paso 6 LISTO'
  },
];
export default class SeguimientoPedido extends React.Component {
  ratingCompleted(rating) {
    console.log("La calificación es:" + rating)
  }
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false,
    }
  }
  state={
    one:false,
    two:false,
  }
  onePressed(){
    //alert('one');
    this.setState({one:true  , two:false})
  };
  twoPressed(){
    //alert('two')
    this.setState({one:false, two:true})
  }
  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }
  

  render() {
    return (
      <Container>
        <Header />
        <Content style={styles.content}>
        <Text style={styles.textContentList}> Entrega estimada: 1 hora </Text>
        <ListItem icon>
            <Left>
              <TouchableOpacity style={{ backgroundColor: "#8fbc8f", fontSize: 50 }}  onPress={this.showPass.bind(this)} >
                <Icon active name={this.state.press == false ? 'square-outline' : 'ios-checkbox-outline'} 
                style={{marginLeft:4, color:'#ffffff'}} />
              </TouchableOpacity>
            </Left>
            <Body style={{marginRight: 30}}>
              <Text style={styles.textBody}>Tu OH recivio tu pedido</Text>
            </Body>
          </ListItem>
           <ListItem icon>
            <Left>
              <TouchableOpacity style={{ backgroundColor: "#8fbc8f", fontSize: 50 }}  onPress={this.showPass.bind(this)} >
                <Icon active name={this.state.press == false ? 'square-outline' : 'ios-checkbox-outline'} 
                 style={{marginLeft:4, color:'#ffffff'}} />
              </TouchableOpacity>
            </Left>
            <Body style={{marginRight: 30}}>
              <Text style={styles.textBody}>Está recolectando los productos de tu Pedido</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <TouchableOpacity style={{ backgroundColor: "#8fbc8f", fontSize: 50 }}  onPress={this.showPass.bind(this)} >
                <Icon active name={this.state.press == false ? 'square-outline' : 'ios-checkbox-outline'} 
                 style={{marginLeft:4, color:'#ffffff'}} />
              </TouchableOpacity>
            </Left>
            <Body style={{marginRight: 30}}>
              <Text style={styles.textBody}>Pedido completo</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <TouchableOpacity style={{ backgroundColor: "#8fbc8f", fontSize: 50 }}  onPress={this.showPass.bind(this)} >
                <Icon active name={this.state.press == false ? 'square-outline' : 'ios-checkbox-outline'} 
                style={{marginLeft:4, color:'#ffffff'}} />
              </TouchableOpacity>
            </Left>
            <Body style={{marginRight: 30}}>
              <Text style={styles.textBody}>EL IH recogerá tu Pedido</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <TouchableOpacity style={{ backgroundColor: "#8fbc8f", fontSize: 50 }}  onPress={this.showPass.bind(this)} >
                <Icon active name={this.state.press == false ? 'square-outline' : 'ios-checkbox-outline'} 
                 style={{marginLeft:4, color:'#ffffff'}} />
              </TouchableOpacity>
            </Left>
            <Body style={{marginRight: 30}}>
              <Text style={styles.textBody}>Tu IH llegará a tu drección</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <TouchableOpacity style={{ backgroundColor: "#8fbc8f", fontSize: 50 }}  onPress={this.showPass.bind(this)} >
                <Icon active name={this.state.press == false ? 'square-outline' : 'ios-checkbox-outline'} 
                style={{marginLeft:4, color:'#ffffff'}}/>
              </TouchableOpacity>
            </Left>
            <Body style={{marginRight: 30}}>
              <Text style={styles.textBody}>Puedes calificar a tu OH y IH</Text>
            </Body>
          </ListItem>
        </Content>
        <Content>
        <CheckboxGroup
                      callback={(selected) => { console.log(selected) }}
                      rowDirection={"column"}
                      iconColor={"#5cb85c"}
                      iconSize={30}
                      checkedIcon="ios-checkbox-outline"
                      uncheckedIcon="ios-square-outline"
                      checkboxes={dataPedido}
                      labelStyle={{
                        flex: 1,
                        color: '#333',
                        marginLeft: 10,
                        marginRight: 10,
                        fontSize: 18,
                        justifyContent: 'center',
                        textAlign: 'left'
                        
                      }}
                      rowStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        padding: 1
                      }} 
                  />
        </Content>
        <Content>

        <AirbnbRating
         reviews={[ "Malo","Hmm...","Bueno","Muy Bueno","Exelente",]} 
         onFinishRating={this.ratingCompleted}
         />
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  content:{
    flex: 1, 
    marginLeft: 5, 
    marginTop: 15 
  },
  textContentList:{
    fontSize: 18,
    justifyContent: 'center', 
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textBody:{
    fontSize: 18,
  },
});