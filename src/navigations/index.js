import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './authNavigation';
import AppStack from './appNavigation';
const MainStack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{ headerShown: false }}>
                <MainStack.Screen name={"AuthStack"} component={AuthStack} />
                <MainStack.Screen name={"AppStack"} component={AppStack} />

            </MainStack.Navigator>
        </NavigationContainer>
    )
};
export default Navigation;