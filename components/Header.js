import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const Header = () => {

    const [token, setToken] = React.useState('')

    return (
        <View style={styles.header}>
            <View style={styles.headerLogo}>
                <Text style={styles.headerLogoText}>BNS</Text>
            </View>
            <View style={styles.headerLinksBlock}>
                {token ?
                    <View style={styles.headerLinks}>
                        <Ionicons name="add-outline" size={32} color="black" style={{marginRight: 15}}/>
                        <Ionicons name="person-circle" size={32} color="black" style={{marginRight: 15}}/>
                        <Ionicons name="log-out-outline" size={32} color="black" style={{marginRight: 15}}/>
                    </View>
                    :
                    <View style={styles.headerLinks}>
                        <Ionicons name="log-in-outline" size={32} color="black" style={{marginRight: 15}}/>
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
