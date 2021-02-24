import axios from "axios";
import deviceStorage from "./device-storage";

const API_URL = "http://192.168.1.32:8080/";

const register = (name, email, password) => {
    return axios.post(API_URL + "api/auth/signup", {
        email: email,
        name: name,
        password: password
    }).then(() => {
        return 'Account was created. You can now log in!'
    }).catch((err) => console.log(err))
};

const login = (email, password) => {
    return axios.post(API_URL + "api/auth/signin", {
        email: email,
        password: password
    }).then((response) => {
        deviceStorage.saveItem("id_token", response.data.accessToken)
    })
};


export default {
    register,
    login
};
