import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header'

const MainScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Header />
            <Text>Hello, this is main screen</Text>
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    }
})
