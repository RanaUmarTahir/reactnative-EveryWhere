
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
import Login from '../../screens/authFlow/login';
import Signup from '../../screens/authFlow/signup';
import Splash from '../../screens/authFlow/splash';
import { routes } from '../../constants/routes';

import ForgetPassword from '../../screens/authFlow/forgetPassword';





const Auth = createNativeStackNavigator();

const AuthStack = () => {
    return (

        <Auth.Navigator
            screenOptions={{ headerShown: false }} initialRouteName='Splash'>
            <Auth.Screen name={routes.splash} component={Splash} />
            <Auth.Screen name={routes.login} component={Login} />
            <Auth.Screen name={routes.signup} component={Signup} />
            <Auth.Screen name={routes.forgotPassword} component={ForgetPassword} />

        </Auth.Navigator>
    );
}


export default AuthStack;
