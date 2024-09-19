import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef } from 'react'
import { appImages } from '../../../constants/Images';
import { width, height } from 'react-native-dimension';
import { Colors } from '../../../constants/colors';
import { routes } from '../../../constants/routes';
import { SuccessBottomSheet } from '../../../components/bottomSheet';


const ForgotPassword = ({ navigation }) => {
    const refRBSheet = useRef()
    return (
        <View style={styles.sectionContainer}>

            <Image style={styles.leavesTop} source={appImages.leavesTop} />
            <Image style={styles.leavesBottom} source={appImages.leavesBottom} />

            <View style={styles.heading}>
                <TouchableOpacity style={styles.back}>
                    <Image style={styles.backarrow} source={appImages.backarrow} />
                </TouchableOpacity>
                <View style={styles.space} />
                <Text style={styles.forgetText}>Forgot Password</Text>
            </View>

            <Text style={styles.detailsText}>Enter you registered email address to receive a password reset link.</Text>

            <View style={styles.topspace} />

            <View style={styles.img}>
                <Image style={styles.imgs} source={appImages.forgetImage} />
            </View>

            <View style={styles.topspace} />

            <View style={styles.groupView}>
                <Text style={styles.viewHeading} >Email</Text>
                <View style={styles.fourp} />
                <View style={styles.textBox} >
                    <Image style={styles.icon} source={appImages.mail} />
                    {/* <View style={styles.space} /> */}
                    <TextInput style={styles.inputText} placeholder='example@email.com' />
                </View>
            </View>

            <View style={styles.topspace} />

            <TouchableOpacity style={styles.button} onPress={() => refRBSheet.current.open()}>
                <SuccessBottomSheet refRBSheet={refRBSheet} />
                <Image source={appImages.send} />
                <Text style={styles.buttonText}>Send Reset Link</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    sectionContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: width(6.97),
        // height: height(72.10),
        // width: width(73.22),
    },
    leavesTop: {
        width: width(100),
        height: height(29.09),
        position: "absolute",
        top: -150,
        resizeMode: "cover",
        opacity: 0.3,
    },
    logo: {
        alignSelf: "center",
        position: "absolute",
        resizeMode: "contain",
        marginTop: height(19.09),
    },
    leavesBottom: {
        width: width(100),
        height: height(29.09),
        position: "absolute",
        resizeMode: "cover",
        opacity: 0.3,
        bottom: -50,
    },
    heading: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: height(8.04),
        // marginHorizontal: width(6.9),

    },
    backarrow: {
        height: height(2.5),
        width: width(5.5),
        padding: 12,
    },
    back: {
        height: height(4.29),
        width: width(8),
        backgroundColor: Colors.offwhite,
        borderRadius: 50,
        // borderWidth: 1,
        // padding: 12,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: height(10.09),

    },
    topspace: {
        marginTop: height(3.42),
    },
    space: {
        marginHorizontal: width(6),
    },
    forgetText: {
        color: Colors.darkBlue,
        alignSelf: "center",
        fontFamily: "Satoshi Variable",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "bold",
    },
    detailsText: {
        color: Colors.darkBlue,
        alignSelf: "center",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontStyle: "normal",
        // fontWeight: "bold",
        marginTop: height(2.5),
        textAlign: "center",
    },
    img: {
        paddingHorizontal: width(22.9),
    },
    imgs: {
        height: height(29.82),
        width: width(64.65),
    },
    groupView: {
        marginHorizontal: 30,
    },
    textBox: {
        borderRadius: 16,
        borderColor: Colors.gray,
        borderWidth: 1,
        fontSize: 16,
        paddingHorizontal: 10,
        // paddingHorizontal: width(2.7),
        // paddingVertical: height(1.2),
        // width: width(73.2),
        // height: height(5.15),
        flexDirection: "row",
        // backgroundColor: 'green',
        alignItems: 'center'
    },
    icon: {
        // resizeMode: "contain",
        height: height(2.5),
        width: width(5.5),
        marginRight: width(2)
    },
    space: {
        paddingHorizontal: width(2.7),
    },
    fourp: {
        marginVertical: height(0.42),
    },
    inputText: {
        // backgroundColor: "red",
        fontSize: 12,
        // height: height(2.3),
        // width: width(59.3),
        color: Colors.black,
        // marginHorizontal: 10,
        // padding: 10,
    },
    sixteenp: {
        marginVertical: height(1.71),
    },
    viewHeading: {
        fontSize: 16,
        fontWeight: "400",
        color: Colors.gray,
    },
    button: {
        backgroundColor: Colors.zinc,
        flexDirection: "row",
        color: Colors.white,
        padding: 12,
        justifyContent: "center",
        borderRadius: 16,
        // height: height(5.15),
        width: width(63.95),
        alignSelf: "center",
        alignItems: "center",
    },
    buttonText: {
        color: Colors.white,
        marginLeft: width(0.92),
    },

})
export default ForgotPassword