import React from 'react';
import { Button, Image, View, Text } from 'react-native';

export default class LogoHeader extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/Logo_Header.png')}
        style={{ width: 200, height: 150,  marginRight: -100, }}
      />
    );
  }
}