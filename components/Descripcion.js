import React from 'react';
import { Text, Button, Icon } from 'react-native-elements';
import { View, ScrollView, StyleSheet, Image} from 'react-native';
import { Content, Card, CardItem, Left, Picker, ListItem, Separator } from 'native-base';

export default class Descripcion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key0"
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    render() {
        return (
            <ScrollView>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://food-images.files.bbci.co.uk/food/recipes/alpine_pizza_32132_16x9.jpg' }}
                                style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{margin: 7,}} >
                                    La mejor pizza...
                                </Text>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <View style={{ flex: 1,  paddingTop: 0, }}>
                                <Text style={styles.textPicker}>
                                    Porciones:
                                </Text>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={{ width: 90, height: 40, marginLeft: 150, }}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="2 " value="key0" />
                                    <Picker.Item label="3 " value="key1" />
                                    <Picker.Item label="4 " value="key2" />
                                    <Picker.Item label="5 " value="key3" />
                                    <Picker.Item label="10 " value="key4" />
                                </Picker>
                            </View>
                        </CardItem>
                    </Card>
                    <Card>
                    <Content>
                        <Separator bordered>
                            <Text style={styles.textSeparador} >Ingredientes</Text>
                        </Separator>
                        <ListItem>
                            <Text style={styles.textList}>Caroline Aaron</Text>
                        </ListItem>
                        <ListItem last>
                            <Text>Lee Allen</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Caroline Aaron</Text>
                        </ListItem>
                        <ListItem last>
                            <Text>Lee Allen</Text>
                        </ListItem>
                    </Content>
                    </Card>
                </Content>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  textPicker:{
    fontSize: 15,
    textAlign: 'left',
    margin: 7,
    marginBottom: -30,
  },
  textList:{
    marginLeft: 15,

  },
  textSeparador:{
    marginLeft: 7,
    fontSize: 15,
    fontWeight: 'bold', 
  },

});