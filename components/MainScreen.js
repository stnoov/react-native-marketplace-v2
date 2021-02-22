import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from './Header'

const MainScreen = ({ navigation }) => {

    const [city, setCity] = React.useState('Oulu');
    const [category, setCategory] = React.useState('All');

    return (
        <View style={styles.mainContainer}>
            <Header navigation={navigation} />
            <View style={styles.body}>
                <View style={styles.sorting}>
                <DropDownPicker
                    items={[
                        {label: 'All', value: 'All'},
                        {label: 'Electronics', value: 'Electronics'},
                        {label: 'Cars', value: 'Cars'},
                        {label: 'Clothes and shoes', value: 'Clothes'},
                        {label: 'Decor and furniture', value: 'Furniture'},
                    ]}
                    defaultValue={category}
                    containerStyle={{height: 40, width: 150, marginLeft: 18, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    onChangeItem={item => setCategory(item.value)}
                />
                <DropDownPicker
                    items={[
                        {label: 'Oulu', value: 'Oulu'},
                        {label: 'Helsinki', value: 'Helsinki'},
                        {label: 'Tampere', value: 'Tampere'},
                    ]}
                    containerStyle={{height: 40, width: 150, marginLeft: 5, marginTop: 10}}
                    style={{}}
                    defaultValue={city}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    onChangeItem={item => setCity(item.value)}
                />
                    <TouchableOpacity style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    body: {
        flex: 1,
    },
    sorting: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchButton: {
        padding: 10,
        backgroundColor: '#F94F55',
        minWidth: 50,
        marginTop: 10,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    searchButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
})
