import React from 'react';
import { Text, StyleSheet, Image, View, ImageBackground, TextInput, Dimensions, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import bgImage from '../assets/fondo-inicio.jpg';
import logo from '../assets/Logo_2018.png';

const { width: WIDTH } = Dimensions.get('window')

export default class IniciarSesion extends React.Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false,
    }
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
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.imputContainer}>
          <Icon name={'ios-phone-portrait'} size={28} color={'rgba(255,255,255, 0.7)'}
            style={styles.imputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Escribe tu numero'}
            placeholderTextColor={'rgba(255,255,255, 0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.imputContainer}>
          <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255, 0.7)'}
            style={styles.imputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Contraseña'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255, 0.7)'}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity style={styles.btnEyes}
            onPress={this.showPass.bind(this)} >
            <Icon name={this.state.press == false ? 'md-eye' : 'md-eye-off'}
              size={26} color={'rgba(255,255,255, 0.7)'} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}
          onPress={() => this.props.navigation.navigate('TabNavigator')}>
          <Text style={styles.text}> Iniciar </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
 

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 250,
    height: 150,
  },
  imputContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba( 0, 0, 0, 0.35)',
    color: 'rgba( 225, 225, 225, 0.7)',
    marginHorizontal: 25,
  },
  imputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  btnEyes: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#b92147',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
})