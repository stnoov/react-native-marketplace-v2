import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen, LoginScreen, RegisterScreen, AddPostingScreen, SingleItemScreen, UserScreen} from "./components";
import {StatusBar} from "expo-status-bar";
import Header from "./components/Header";
import {AsyncStorage} from "react-native";

const Stack = createStackNavigator();

export default function App() {

    const [user, setUser] = React.useState({})

    React.useEffect( () => {
         AsyncStorage.getItem('user').then((user) => {
            setUser(JSON.parse(user))
        })
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: ({navigation}) => <Header navigation={navigation} options={{ user: user, setUser: setUser }} />
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    initialParams={{ setUser: setUser }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                />
                <Stack.Screen
                    name="AddPosting"
                    component={AddPostingScreen}
                    initialParams={{ user: user }}
                />
                <Stack.Screen
                    name="SingleItem"
                    component={SingleItemScreen}
                />
                <Stack.Screen
                    name="Account"
                    component={UserScreen}
                />
            </Stack.Navigator>
            <StatusBar hidden/>
        </NavigationContainer>
    );
}

