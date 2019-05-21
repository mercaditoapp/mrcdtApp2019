import React from 'react';
import { Text } from 'react-native-elements';
export default class Procedimiento extends React.Component{
    static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.otherParam })
    render() {
        return (
            <Text>
                Hola soy Procedimiento
            </Text>
        )
    }
}