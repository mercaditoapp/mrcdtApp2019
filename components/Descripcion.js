import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Content, Card, CardItem, Left, Picker, ListItem, Separator, } from 'native-base';

export default class Descripcion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key0",
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    render() {
        let receta = this.props.payload;
        return (
            <ScrollView>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image source={{ uri: receta.imagen }}
                                style={{ height: 200, width: null, flex: 2 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{ flex: 1, margin: 7, }} >
                                    {receta.descripcion}
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
                                <Text style={styles.textSeparador}>Ingredientes</Text>
                            </Separator>
                            {
                                receta.ingredientesReceta.map((ingredienteReceta, index) => {
                                    return <ListItem key={index}>
                                             <Text>{`${ingredienteReceta.producto.nombre} ( ${ingredienteReceta.cantidad} ${ingredienteReceta.unidad.nombre} )`}</Text>
                                           </ListItem>
                                })
                            }
                        </Content>
                    </Card>
                </Content>
                <TouchableOpacity style={styles.btnPedido}
                onPress={() => this.props.navigation.push('Pedido', {payload: receta})}>
                <Text style={styles.btnText}>{`Ver Pedido ${receta.precio}`}</Text>
              </TouchableOpacity>
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
    btnPedido: {
        backgroundColor: '#5cb85c',
        borderRadius: 25,
        justifyContent: 'center',
        height: 40,
        width: 250,
        marginLeft: 50,
        marginRight:  10,
      },
    
      btnText: {
        color: '#ffffff',
        fontSize: 19,
        textAlign: 'center',
        fontWeight: 'bold',
      },
});