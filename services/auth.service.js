import axios from "axios";
import deviceStorage from "./device-storage";
import { AsyncStorage } from 'react-native';

const API_URL = "https://graded-exc-api.herokuapp.com/";

const register = (name, email, password) => {
    return axios.post(API_URL + "api/auth/signup", {
        email: email,
        name: name,
        password: password
    }).then(() => {
        return 1
    }).catch((err) => console.log(err))
};

const login = (email, password) => {
    return axios.post(API_URL + "api/auth/signin", {
        email: email,
        password: password
    }).then((response) => {
        deviceStorage.saveItem("user", (response.data))
        return response.data
    }).catch((err) => {
        console.log(err)
        return 0
    })
};

const logout = () => {
    AsyncStorage.removeItem("id_token");
}


export default {
    register,
    login,
    logout
};
