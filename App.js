import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from "./components";
import {StatusBar} from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
        >
          <Stack.Screen
              name="Home"
              component={MainScreen}
          />
        </Stack.Navigator>
        <StatusBar hidden />
      </NavigationContainer>
  );
}

