import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header'

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Header navigation={navigation} />
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
