import axios from "axios";
import { AsyncStorage } from 'react-native';
import deviceStorage from "./device-storage";

const API_URL = "http://192.168.1.32:8080/";

const addItem = (token, title, description, category, location, images, price, delivery_type) => {
    return axios.post(API_URL + "api/postings/add_posting", {
        title: title,
        description: description,
        category: category,
        location: location,
        images: images,
        price: price,
        delivery_type: delivery_type
    }, { headers: {
            'x-access-token': token
        }}).then(() => {
        return 1
    }).catch((err) => console.log(err))
};


export default {
    addItem,
};
