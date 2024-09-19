import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { width, height } from 'react-native-dimension'
import { appImages } from '../../../constants/Images';
import { Colors } from '../../../constants/colors';
import Signup from '../signup';
import forgetPassword from '../forgetPassword';
import { TextInputBordered } from '../../../components/textInput';
import { Spacer } from '../../../components/spacer';
import { BorderedButton, ColoredButton } from '../../../components/button';
import { routes } from '../../../constants/routes';









const Login = ({ navigation }) => {
    return (
        <View style={styles.sectionContainer}>
            <Image style={styles.leavesTop} source={appImages.leavesTop} />
            <Image style={styles.logo} source={appImages.logo} />
            <Image style={styles.leavesBottom} source={appImages.leavesBottom} />
            <View>
                <Text style={styles.loginText}>Login to your account</Text>
                <Text style={styles.enterEmailpassword}>Enter your email address and password</Text>
            </View>
            <Spacer />
            <TextInputBordered title={"Full Name"} image={appImages.user} placeholder={'John Doe'} />
            <Spacer totalHeight={height(3)} />
            <TextInputBordered title={'Password'} image={appImages.lock} placeholder={'Password'} secureTextEntry />

            <TouchableOpacity style={styles.forgetPassword} onPress={() => navigation.navigate('forgotPassword')}><Text>Forget Password?</Text></TouchableOpacity>
            <Spacer />
            <ColoredButton title={'Login'} image={appImages.login} onPress={() => navigation.replace('AppStack')} />

            <Spacer />
            <Text style={styles.enterEmailpassword}>Don't have an account?</Text>
            <BorderedButton title={"Create New Account"} image={appImages.simpleUser} onPress={() => navigation.navigate('signup')} />
        </View >
    )
}
const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    logo: {
        alignSelf: "center",
        position: "absolute",
        resizeMode: "contain",
        marginTop: height(19.09),
    },
    leavesTop: {
        width: width(100),
        height: height(29.09),
        position: "absolute",
        top: -100,
        resizeMode: "cover",
        opacity: 0.3,
    },
    leavesBottom: {
        width: width(100),
        height: height(29.09),
        position: "absolute",
        resizeMode: "cover",
        opacity: 0.3,
        bottom: -100,
    },
    loginText: {
        color: Colors.darkBlue,
        alignSelf: "center",
        fontFamily: "Satoshi Variable",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "bold",
        marginTop: height(29.09),
    },
    enterEmailpassword: {
        color: Colors.darkBlue,
        alignSelf: "center",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontStyle: "normal",
        // fontWeight: "bold",
        // marginTop: height(29.09),
    },



    forgetPassword: {
        alignSelf: "flex-end",
        fontSize: 12,
        paddingTop: 8,
        marginRight: 30,


    },



})
export default Login;