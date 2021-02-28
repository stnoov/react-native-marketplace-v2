import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from "axios";

const MainScreen = ({navigation}) => {

    const [city, setCity] = React.useState('Finland');
    const [category, setCategory] = React.useState('All');
    const [items, setItems] = React.useState([])

    const getAllPostings = async () => {
        await axios.get("http://192.168.1.32:8080/api/postings/get_postings").then((response) => {
            setItems(response.data.message)
        })
    }
    const getSortedPostings = async () => {
        await axios.post("http://192.168.1.32:8080/api/postings/get_sorted_postings", {
            location: city,
            category: category
        }).then((response) => {
            setItems(response.data.message)
        })
    }
    React.useEffect(() => {
        getAllPostings()
    }, [])

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
                    <TouchableOpacity style={styles.searchButton} onPress={() => getSortedPostings()}>
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.itemsList}>
                    <View style={styles.currentSearch}>
                        <Text style={{flex: 1}}>{category} in {city}</Text>
                        <Text style={styles.itemsFound}>{items.length} items found</Text>
                    </View>

                    {items.length > 0 ?
                        items.map((element, index) => {
                            return <TouchableOpacity key={index} style={styles.listItemView} onPress={() => navigation.navigate('SingleItem', {
                                item: {
                                    title: element.title,
                                    description: element.description,
                                    city: element.location,
                                    images: element.images,
                                    postedOn: element.createdAt,
                                    seller: element.seller.name,
                                    sellerEmail: element.seller.email
                                }
                            })}>
                                <Image source={{uri: element.images}}
                                       style={{height: 100, width: 100, borderRadius: 5}}/>
                                <View>
                                    <Text style={styles.itemListTitle}>{element.title}</Text>
                                    <Text style={styles.itemCity}>Finland, {element.location}</Text>
                                    <Text style={styles.itemPrice}>{element.price}€</Text>
                                    <Text style={styles.itemPostedOn}>{element.createdAt}</Text>
                                </View>
                            </TouchableOpacity>
                        })
                        : null}

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
