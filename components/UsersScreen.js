import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "./Header";

const UserScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Header navigation={navigation}/>
            <View style={styles.body}>
                <View style={styles.main}>
                    <Text style={styles.title}>Logged in as User</Text>
                </View>
            <View style={styles.postings}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Your postings</Text>
                <ScrollView style={styles.itemsList}>
                    <View>
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
                               style={{height: 80, width: 80, borderRadius: 5}}/>
                        <View>
                            <Text style={styles.itemListTitle}>Iittala Kastehelmi harmaa tuikkulyhty 64mm</Text>
                            <Text style={styles.itemPrice}>9€</Text>
                            <View style={styles.buttonsBlock}>
                                <TouchableOpacity style={styles.editButton}>
                                    <Text style={styles.editButtonText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton}>
                                    <Text style={styles.deleteButtonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>

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
                                   style={{height: 80, width: 80, borderRadius: 5}}/>
                            <View>
                                <Text style={styles.itemListTitle}>Iittala Kastehelmi harmaa tuikkulyhty 64mm</Text>
                                <Text style={styles.itemPrice}>9€</Text>
                                <View style={styles.buttonsBlock}>
                                    <TouchableOpacity style={styles.editButton}>
                                        <Text style={styles.editButtonText}>Edit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.deleteButton}>
                                        <Text style={styles.deleteButtonText}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

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
                                   style={{height: 80, width: 80, borderRadius: 5}}/>
                            <View>
                                <Text style={styles.itemListTitle}>Iittala Kastehelmi harmaa tuikkulyhty 64mm</Text>
                                <Text style={styles.itemPrice}>9€</Text>
                                <View style={styles.buttonsBlock}>
                                    <TouchableOpacity style={styles.editButton}>
                                        <Text style={styles.editButtonText}>Edit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.deleteButton}>
                                        <Text style={styles.deleteButtonText}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            </View>
        </View>
    );
};

export default UserScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    body: {
        flex: 1,
    },
    main: {
        marginTop: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    postings: {
        marginTop: 20,
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
        paddingLeft: 5
    },
    itemPrice: {
        fontSize: 18,
        padding: 5
    },
    buttonsBlock: {
        flexDirection: 'row'
    },
    deleteButton: {
        padding: 10,
        backgroundColor: '#F94F55',
        minWidth: 40,
        borderRadius: 5,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    deleteButtonText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    },
    editButton: {
        padding: 10,
        backgroundColor: '#6781AA',
        minWidth: 40,
        borderRadius: 5,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    editButtonText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    },

})
