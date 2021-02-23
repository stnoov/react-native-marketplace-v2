import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const Header = ({navigation}) => {

    const [token, setToken] = React.useState('123')

    return (
        <View style={styles.header}>
            <View style={styles.headerLogo}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.headerLogoText}>BNS</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.headerLinksBlock}>
                {token ?
                    <View style={styles.headerLinks}>
                        <TouchableOpacity onPress={() => navigation.navigate('AddPosting')}>
                            <Ionicons name="add-outline" size={36} color="black" style={{marginRight: 15}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                            <Ionicons name="person-circle" size={32} color="black" style={{marginRight: 15}}/>
                        </TouchableOpacity>

                        <Ionicons name="log-out-outline" size={32} color="black" style={{marginRight: 15}}/>
                    </View>
                    :
                    <View style={styles.headerLinks}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Ionicons name="log-in-outline" size={32} color="black" style={{marginRight: 15}}/>
                        </TouchableOpacity>
                    </View>
                }

            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#FAFAFA',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#DDDDDD'
    },
    headerLogo: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 25,
        flex: 1,
    },
    headerLogoText: {
        fontSize: 32,
        color: '#F94F55',
        fontWeight: "bold",
        letterSpacing: 2
    },
    headerLinksBlock: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 10
    },
    headerLinks: {
        flexDirection: 'row',
    }
})
