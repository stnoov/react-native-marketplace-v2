import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Header from "./Header";
import AuthService from "../services/auth.service";

const RegisterScreen = ({navigation}) => {

    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleRegister = () => {
        AuthService.register(name, email, password)
            .then((response) => {
                if(response === 1) {
                    alert(response)
                    navigation.navigate('Login')
                } else {
                    alert('This email is already registered')
                }
            }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <View style={styles.mainContainer}>
            <Header navigation={navigation}/>
            <View style={styles.body}>
                <Text style={styles.screenTitle}>Create new account</Text>
                <View style={{
                    padding: 10,
                    backgroundColor: 'transparent',
                    minWidth: 300,
                    borderWidth: 2,
                    marginTop: 20,
                    borderColor: '#DEDEDE',
                    borderRadius: 5
                }}>
                    <TextInput
                        style={{height: 20}}
                        placeholder="Your name"
                        onChangeText={name => setName(name)}
                        defaultValue={name}
                    />
                </View>
                <View style={{
                    padding: 10,
                    backgroundColor: 'transparent',
                    minWidth: 300,
                    borderWidth: 2,
                    marginTop: 20,
                    borderColor: '#DEDEDE',
                    borderRadius: 5
                }}>
                    <TextInput
                        style={{height: 20}}
                        placeholder="Your email"
                        onChangeText={email => setEmail(email)}
                        defaultValue={email}
                    />
                </View>
                <View style={{
                    padding: 10,
                    backgroundColor: 'transparent',
                    minWidth: 300,
                    borderWidth: 2,
                    marginTop: 10,
                    borderColor: '#DEDEDE',
                    borderRadius: 5
                }}>
                    <TextInput
                        style={{height: 20}}
                        secureTextEntry={true}
                        placeholder="Choose password"
                        onChangeText={password => setPassword(password)}
                        defaultValue={password}
                    />
                </View>
                <View style={{
                    padding: 10,
                    backgroundColor: 'transparent',
                    minWidth: 300,
                    borderWidth: 2,
                    marginTop: 10,
                    borderColor: '#DEDEDE',
                    borderRadius: 5
                }}>
                    <TextInput
                        style={{height: 20}}
                        secureTextEntry={true}
                        placeholder="Confirm password"
                        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                        defaultValue={confirmPassword}
                    />
                </View>
                <TouchableOpacity style={styles.registerButton} onPress={() => handleRegister()}>
                    <Text style={styles.registerButtonText}>Create account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginExisting} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginExistingText}>Login to existing account</Text>
                </TouchableOpacity>

                <Text style={styles.smallText}>Developed by Artem Sitnov ©</Text>
            </View>
        </View>
    );
};

export default RegisterScreen;

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
