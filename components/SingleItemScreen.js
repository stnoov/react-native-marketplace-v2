import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import {Ionicons} from "@expo/vector-icons";

const SingleItemScreen = ({ navigation, route }) => {

    const [images, setImages] = React.useState([
        require('../assets/test_img.jpg'),
        require('../assets/test_img.jpg'),
        require('../assets/test_img.jpg')
    ])
    return (
        <View style={styles.mainContainer}>
            <View style={styles.body}>
                <SliderBox
                    images={images}
                    sliderBoxHeight={300}
                    ImageComponentStyle={{height: 300, width: '100%', marginTop: 5}}
                />
                <View>
                    <Text style={styles.title}>
                        {route.params.item.title}
                    </Text>
                    <Text style={styles.description}>
                        Luxuskonttori/myymälätila Käpyläntie 6, moottoritien laidalla, 2 huonetta, toisessa keittiönurkkaus , ja sauna, vuokra 450,- + Alv , lämpö sis. hintaan, Saapihan siinä vaikka asuakki...
                    </Text>
                    <Text style={styles.city}>
                        <Ionicons name="location-outline" size={18} color="black" style={{marginRight: 10}}/> {route.params.item.city}, Finland
                    </Text>
                    <Text style={styles.postedOn}>
                        <Ionicons name="time-outline" size={18} color="black" style={{marginRight: 10}}/> Posted: {route.params.item.postedOn}
                    </Text>
                    <Text style={styles.seller}>
                        <Ionicons name="person-circle-outline" size={18} color="black" style={{marginRight: 10}}/> Seller: {route.params.item.seller}
                    </Text>
                    <Text style={styles.seller}>
                        <Ionicons name="mail-outline" size={18} color="black" style={{marginRight: 10}}/> Contact seller at {route.params.item.sellerEmail}
                    </Text>

                </View>

            </View>
        </View>
    );
};

export default SingleItemScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    body: {
        flex: 1,
    },
    title: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 18
    },
    description: {
      paddingTop: 0,
      padding: 10
    },
    city: {
        padding: 10,
        paddingTop: 5,
        fontSize: 16
    },
    postedOn: {
        padding: 10,
        paddingTop: 0,
        fontSize: 16
    },
    seller: {
        padding: 10,
        paddingTop: 0,
        fontSize: 16
    }
})
