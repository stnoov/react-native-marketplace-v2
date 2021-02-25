import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const MainScreen = ({navigation}) => {

    const [city, setCity] = React.useState('Finland');
    const [category, setCategory] = React.useState('All');


    return (
        <View style={styles.mainContainer}>
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
                            {label: 'Whole Finland', value: 'Finland'},
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

                <ScrollView style={styles.itemsList}>
                    <View style={styles.currentSearch}>
                        <Text style={{flex: 1}}>All items in Finland</Text>
                        <Text style={styles.itemsFound}>3 items found</Text>
                    </View>

                    <TouchableOpacity style={styles.listItemView} onPress={() => navigation.navigate('SingleItem', {
                        item: {
                            title: 'Iittala Kastehelmi harmaa tuikkulyhty 64mm',
                            city: 'Oulu',
                            postedOn: 'Today at 15:48',
                            seller: 'Artem',
                            sellerEmail: 'student@oamk.fi'
                        }
                    })}>
                        <Image source={require('../assets/test_img.jpg')}
                               style={{height: 100, width: 100, borderRadius: 5}}/>
                        <View>
                            <Text style={styles.itemListTitle}>Iittala Kastehelmi harmaa tuikkulyhty 64mm</Text>
                            <Text style={styles.itemCity}>Finland, Oulu</Text>
                            <Text style={styles.itemPrice}>9€</Text>
                            <Text style={styles.itemPostedOn}>Today at 15:48</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.listItemView}>
                        <Image source={require('../assets/test_img.jpg')}
                               style={{height: 100, width: 100, borderRadius: 5}}/>
                        <View>
                            <Text style={styles.itemListTitle}>Iittala Kastehelmi harmaa tuikkulyhty 64mm</Text>
                            <Text style={styles.itemCity}>Finland, Oulu</Text>
                            <Text style={styles.itemPrice}>9€</Text>
                            <Text style={styles.itemPostedOn}>Today at 15:48</Text>
                        </View>
                    </View>

                    <View style={styles.listItemView}>

                        <Image source={require('../assets/test_img.jpg')}
                               style={{height: 100, width: 100, borderRadius: 5}}/>
                        <View>
                            <Text style={styles.itemListTitle}>Iittala Kastehelmi harmaa tuikkulyhty 64mm</Text>
                            <Text style={styles.itemCity}>Finland, Oulu</Text>
                            <Text style={styles.itemPrice}>9€</Text>
                            <Text style={styles.itemPostedOn}>Today at 15:48</Text>
                        </View>
                    </View>

                </ScrollView>
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
    currentSearch: {
        padding: 10,
        paddingLeft: 18,
        borderBottomWidth: 1,
        borderColor: '#DDDDDD',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemsList: {
        flexDirection: 'column',
        paddingTop: 10
    },
    listItemView: {
        padding: 10,
        paddingLeft: 18,
        borderBottomWidth: 1,
        borderColor: '#DDDDDD',
        flexDirection: 'row'
    },
    itemListTitle: {
        padding: 5,
        paddingBottom: 0,
    },
    itemCity: {
        fontSize: 12,
        paddingTop: 0,
        padding: 5
    },
    itemPrice: {
        fontSize: 18,
        padding: 5
    },
    itemPostedOn: {
        fontSize: 13,
        padding: 5,
        paddingBottom: 0,
        paddingTop: 0
    }
})
