import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button, ScrollView} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import PostingService from '../services/postings.service'

const EditPostingScreen = ({ navigation, route }) => {

    const item = route.params.item

    const [title, setTitle] = React.useState(item.title);
    const [description, setDescription] = React.useState(item.description)
    const [price, setPrice] = React.useState(item.price)
    const [category, setCategory] = React.useState(item.category);
    const [city, setCity] = React.useState(item.city);
    const [deliveryType, setDeliveryType] = React.useState(item.delivery_type);
    const [image, setImage] = React.useState(item.images);
    const [newImage, setNewImage] = React.useState(null)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        if (!result.cancelled) {
            setNewImage(result);
        }
    };

    const handleSubmit = () => {
        PostingService.editItem(route.params.user.accessToken, item.id, title, description, category, city, newImage.base64, price, deliveryType).then(() => {
            alert('Posting was edited')
            navigation.navigate('Main')
        })

    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.body}>
                <Text style={styles.screenTitle}>Edit posting</Text>
                <View style={{padding: 10, backgroundColor: 'transparent', minWidth: 300, borderWidth: 2, marginTop: 20, borderColor: '#DEDEDE', borderRadius: 5}}>
                    <TextInput
                        style={{height: 20}}
                        placeholder="Title"
                        onChangeText={title => setTitle(title)}
                        defaultValue={title}
                    />
                </View>
                <View style={{padding: 10, backgroundColor: 'transparent', minWidth: 300, borderWidth: 2, marginTop: 20, borderColor: '#DEDEDE', borderRadius: 5}}>
                    <TextInput
                        style={{height: 20}}
                        placeholder="Description"
                        onChangeText={description => setDescription(description)}
                        defaultValue={description}

                    />
                </View>

                <View style={{ flex: 1, minWidth: 300, marginTop: 10 }}>
                    <Button title="Pick an image from camera roll" onPress={pickImage} />
                    {image && !newImage ? <Image source={{ uri: image }} style={{ width: 100, height: 100, marginTop: 10, alignSelf: 'center', borderRadius: 5 }} /> : null}
                    {newImage && <Image source={{ uri: newImage.uri }} style={{ width: 100, height: 100, marginTop: 10, alignSelf: 'center', borderRadius: 5 }} />}
                </View>

                <View style={{flexDirection: 'row'}}>
                    <DropDownPicker
                        items={[
                            {label: 'Oulu', value: 'Oulu'},
                            {label: 'Helsinki', value: 'Helsinki'},
                            {label: 'Tampere', value: 'Tampere'},
                        ]}
                        containerStyle={{height: 50, width: 145}}
                        style={{marginTop: 10}}
                        defaultValue={city}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        onChangeItem={item => setCity(item.value)}
                    />

                    <DropDownPicker
                        items={[
                            {label: 'Pickup', value: 'Pickup'},
                            {label: 'Shipping', value: 'Shipping'},
                        ]}
                        containerStyle={{height: 50, width: 145, marginLeft: 10}}
                        style={{marginTop: 10}}
                        defaultValue={deliveryType}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        onChangeItem={item => setDeliveryType(item.value)}
                    />
                </View>

                <DropDownPicker
                    items={[
                        {label: 'Electronics', value: 'Electronics'},
                        {label: 'Cars', value: 'Cars'},
                        {label: 'Clothes and shoes', value: 'Clothes'},
                        {label: 'Decor and furniture', value: 'Furniture'},
                    ]}
                    containerStyle={{height: 50, width: 300}}
                    style={{backgroundColor: '#fafafa', marginTop: 10}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    onChangeItem={item => setCategory(item.value)}
                />
                <View style={{padding: 10, backgroundColor: 'transparent', minWidth: 300, borderWidth: 2, marginTop: 10, borderColor: '#DEDEDE', borderRadius: 5}}>
                    <TextInput
                        style={{height: 20}}
                        placeholder="Price"
                        onChangeText={price => setPrice(price)}
                        defaultValue={price}

                    />
                </View>





                <TouchableOpacity style={styles.registerButton} onPress={() => handleSubmit()}>
                    <Text style={styles.registerButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};


export default EditPostingScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    body: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center'
    },
    screenTitle: {
        fontSize: 24,
    },
    registerButton: {
        padding: 10,
        backgroundColor: '#F94F55',
        minWidth: 300,
        marginTop: 10,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    loginExisting: {
        padding: 10,
        backgroundColor: '#6781AA',
        minWidth: 300,
        marginTop: 150,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginExistingText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    smallText: {
        marginTop: 20,
        fontSize: 14,
    }
})
