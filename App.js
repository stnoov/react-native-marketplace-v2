import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen, LoginScreen, RegisterScreen, AddPostingScreen, SingleItemScreen, UserScreen} from "./components";
import {StatusBar} from "expo-status-bar";
import Header from "./components/Header";

const Stack = createStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: ({navigation}) => <Header navigation={navigation}/>
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                />
                <Stack.Screen
                    name="AddPosting"
                    component={AddPostingScreen}
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

