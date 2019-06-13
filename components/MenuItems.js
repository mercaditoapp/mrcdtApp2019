import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class MenuItem extends React.Component {
    render() {
        return (
            <View style={styles.menuItem}>
                <Image
                source={this.props.itemImage}
                style={styles.image} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    menuItem: {
        width: '50%',
        height: '100%',
        padding: 1, 
        backgroundColor: '#ccc',
        borderColor: '#ffffff',
        borderWidth: 1, 
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        borderColor: '#fff',
        borderWidth: 3,
    }
})