import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { Item, Input } from 'native-base';
import { Card  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Inicio extends React.Component {
    static navigationOptions = {
        title: 'Mercadito',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#b92147',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        return fetch('http://18.220.109.49:8080/mrcdtAPI/oauth/receta/findAll', {
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
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            let recetas = this.state.dataSource.map((item, index) => {
                return <TouchableOpacity key={index} activeOpacity={.9} onPress={() => this.props.navigation.push('Receta', {
                    payload: item
                })} >
                    <Card
                        image={{ uri: item.imagen }}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            {item.nombre}
                        </Text>
                        <Text>{item.descripcion}</Text>

                    </Card>
                </TouchableOpacity>
            });
            return (
                <ScrollView style={styles.container}>
                    <Item rounded style={styles.buscador}>
                    <Icon name={'ios-search'} size={25}
                                style={{
                                    position: 'absolute',
                                    top: 10,
                                    left: 10,
                                }} />
                        <Input placeholder='Busca tu restaurante o receta favorita'style={styles.imputText}/>
                    </Item>
                    {recetas}
                </ScrollView>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buscador: {
        marginTop: 3,
    },
    imputText:{
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
      },
});