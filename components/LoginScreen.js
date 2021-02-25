import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


import AuthService from "../services/auth.service";

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        AuthService.login(email, password)
            .then((response) => {
                if(response === 1) {
                    navigation.navigate('Main')
                } else if(response === 0) {
                    alert('Wrong email or password')
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.body}>
                <Text style={styles.screenTitle}>Log in to your account</Text>
                <View style={{padding: 10, backgroundColor: 'transparent', minWidth: 300, borderWidth: 2, marginTop: 20, borderColor: '#DEDEDE', borderRadius: 5}}>
                    <TextInput
                        style={{height: 20}}
                        placeholder="E-mail"
                        onChangeText={email => setEmail(email)}
                        defaultValue={email}
                    />
                </View>
                <View style={{padding: 10, backgroundColor: 'transparent', minWidth: 300, borderWidth: 2, marginTop: 10, borderColor: '#DEDEDE', borderRadius: 5}}>
                    <TextInput
                        style={{height: 20}}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={password => setPassword(password)}
                        defaultValue={password}
                    />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
                    <Text style={styles.loginButtonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.createButtonText}>Create BNS account</Text>
                </TouchableOpacity>

                <Text style={styles.smallText}>Developed by Artem Sitnov ©</Text>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    body: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    screenTitle: {
        fontSize: 24,
    },
    loginButton: {
        padding: 10,
        backgroundColor: '#F94F55',
        minWidth: 300,
        marginTop: 10,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    createButton: {
        padding: 10,
        backgroundColor: '#6781AA',
        minWidth: 300,
        marginTop: 150,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    smallText: {
        marginTop: 20,
        fontSize: 14,
    }
})
