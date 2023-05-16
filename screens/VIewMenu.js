//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '../constants';

// create a component
const ViewMenu = () => {
    return (
        <View style={styles.container}>
            <Text>ViewMenu</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
    },
});

//make this component available to the app
export default ViewMenu;
