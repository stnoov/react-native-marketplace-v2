import axios from "axios";


const API_URL = "https://graded-exc-api.herokuapp.com/";

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

const editItem = (token, id, title, description, category, location, images, price, delivery_type) => {
    return axios.post(API_URL + "api/postings/edit_posting", {
        id: id,
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
    editItem
};
