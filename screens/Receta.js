import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image, ScrollView,TouchableOpacity } from 'react-native';
import { Segment, Content, Button, Picker, Form } from "native-base";
import { Card, Icon } from 'react-native-elements';

export default class Receta extends React.Component {
  static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.otherParam })
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
    this.state = {
      selected: "key0"
    };
  }
  onValueChange() {
    this.setState({
      selected: ("key0","key1","key2","key3","key4")
    });
  }

  componentDidMount() {
    return fetch('http://34.210.212.235:8080/mrcdtAPI/oauth/receta/findAll', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }
  render() {
    const { navigation } = this.props;
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <ScrollView  onPress={() => this.props.navigation.navigate('Pedido')}>
        <TouchableOpacity> 
        <Card
          image={require('../assets/desayuno.ex.jpg')}>
          <Text style={{ marginBottom: 5 }}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
        </Card>
        </TouchableOpacity>
      
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="2 porsiones" value="key0" />
              <Picker.Item label="3 porsiones" value="key1" />
              <Picker.Item label="4 porsiones" value="key2" />
              <Picker.Item label="5 porsiones" value="key3" />
              <Picker.Item label="10 porsiones" value="key4" />
            </Picker>
          </Form>

        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 40 }}>Receta Screen</Text>
          <Button
            title="Go to Pedido"
            onPress={() => this.props.navigation.navigate('Pedido')}
          />
        </View>
        <View> 
        <Segment>
          <Button first>
            <Text>Puppies</Text>
          </Button>
          <Button>
            <Text>Kittens</Text>
          </Button>
          <Button last active>
            <Text>Cubs</Text>
          </Button>
        </Segment>
        <Content padder>
          <Text>Awesome segment</Text>
        </Content>
        </View>
        

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
});