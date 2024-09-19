
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Home from '../../screens/appFlow/home';
import Profile from '../../screens/appFlow/profile';
import { routes } from '../../constants/routes';
import OpenEventCard from '../../screens/appFlow/openEventCard';




const App = createNativeStackNavigator();

const AppStack = () => {
    return (

        <App.Navigator
            initialRouteName={routes.home}
            screenOptions={{ headerShown: false }} >
            <App.Screen name={routes.home} component={Home} />
            {/* <App.Screen name={routes.} component={Profile} /> */}
            <App.Screen name={routes.openEvent} component={OpenEventCard} />
        </App.Navigator>
    );
}


export default AppStack;
