import {AsyncStorage} from 'react-native';

export default function authHeader() {
    AsyncStorage.getItem('id_token').then((token) => {
        if (token) {
            return { 'x-access-token': token };
        } else {
            return {};
        }
    })
}
