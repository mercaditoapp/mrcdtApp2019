import React from 'react';
import { Text, } from 'react-native-elements';
import { View, ScrollView, StyleSheet, Image,  } from 'react-native';
import { Content, Card, CardItem, Left, Picker, ListItem, Separator,  } from 'native-base';

export default class Descripcion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key0",
        };
    }
   
    render() {
        return (
            <ScrollView>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://food-images.files.bbci.co.uk/food/recipes/alpine_pizza_32132_16x9.jpg' }}
                                style={{ height: 200, width: null, flex: 2 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{ flex: 1, margin: 7, }} >
                                    La pizza es un pan plano horneado, habitualmente de forma redonda, elaborado con harina de trigo, sal, agua y levadura, cubierto con salsa de tomate y queso.
                                </Text>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <View style={{ flex: 1, paddingTop: 0, }}>
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
                            <Separator bordered style={styles.separador}>
                                <Text style={styles.textSeparador} >Ingredientes</Text>
                            </Separator>
                            <ListItem>
                                <Text style={styles.textList}>500 grs. Peperoni </Text>
                            </ListItem>
                            <ListItem >
                                <Text style={styles.textList}>500 grs. Masa </Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.textList}>500 grs. Salsa de tomate</Text>
                            </ListItem>
                            <ListItem >
                                <Text style={styles.textList}>500 grs. Queso Motzarella</Text>
                            </ListItem>
                            <ListItem >
                                <Text style={styles.textList}>500 grs. Agua</Text>
                            </ListItem>
                        </Content>
                    </Card>
                </Content>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textPicker: {
        fontSize: 15,
        textAlign: 'left',
        margin: 7,
        marginBottom: -30,
    },
    textList: {
        marginLeft: 15,
    },
    separador: {
        backgroundColor: '#ffffff'
    },
    textSeparador: {
        marginLeft: 7,
        fontSize: 16,
        color: '#b92147',
        fontWeight: 'bold',
    },
});