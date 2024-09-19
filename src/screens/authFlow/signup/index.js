import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { width, height } from 'react-native-dimension'
import { Colors } from '../../../constants/colors'
import { appImages } from '../../../constants/Images'
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox'
import { TextInputBordered } from '../../../components/textInput'
import { Spacer } from '../../../components/spacer'
import { ColoredButton } from '../../../components/button'

const Signup = () => {
    const [isSelected, setSelection] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Photographer', value: 'Photographer' },
        { label: 'Videographer', value: 'videographer' }
    ]);

    return (<ScrollView>
        <View style={styles.sectionContainer}>

            <Image style={styles.leavesTop} source={appImages.leavesTop} />
            <Image style={styles.logo} source={appImages.logo} />
            <Image style={styles.leavesBottom} source={appImages.leavesBottom} />

            <View style={styles.back}>
                <Image style={styles.backarrow} source={appImages.backarrow} />
            </View>
            <View style={styles.topspace} />
            <Text style={styles.signupText}>Create an Account</Text>
            <Text style={styles.detailsText}>Enter below details to get registered</Text>
            <View style={styles.topspace} />
            <TextInputBordered title={"Full name"} image={appImages.user} placeholder={"John Doe"} />

            <Spacer />
            <TextInputBordered title={'Email'} image={appImages.mail} placeholder={'example@email.com'} />

            <View style={styles.sixteenp} />
            <View style={styles.groupView}>
                <Text style={styles.viewHeading} >Account Type</Text>
                <View style={styles.fourp} />

                <DropDownPicker style={styles.textBox}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>

            <Spacer />
            <TextInputBordered title={'Password'} image={appImages.lock} placeholder={'Password'} secureTextEntry />
            <Spacer />
            <TextInputBordered title={'Confirm Password'} image={appImages.lock} placeholder={'Confirm Password'} secureTextEntry />

            <View style={styles.sixteenp} />
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Accept Terms & Conditions</Text>
            </View>

            <Spacer />
            <ColoredButton title={'Register Account'} image={appImages.login} />

        </View >
    </ScrollView >
    )
}
const styles = StyleSheet.create({

    sectionContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        // alignItems: "center",
        // paddingHorizontal: width(4),
        // height: height(72.10),
        // width: width(73.22),
    },
    logo: {
        alignSelf: "center",
        position: "absolute",
        resizeMode: "contain",
        marginTop: height(10.09),
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
        marginTop: height(10.09),
        marginLeft: width(6.9),
    },
    backarrow: {
        height: height(2.5),
        width: width(5.5),
        padding: 12,
    },
    leavesTop: {
        width: width(100),
        height: height(29.09),
        position: "absolute",
        top: -150,
        resizeMode: "cover",
        opacity: 0.3,
    },
    leavesBottom: {
        width: width(100),
        height: height(29.09),
        position: "absolute",
        resizeMode: "cover",
        opacity: 0.3,
        bottom: -150,
    },
    topspace: {
        marginTop: height(3.4),
    },
    signupText: {
        color: Colors.darkBlue,
        alignSelf: "center",
        fontFamily: "Satoshi Variable",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "bold",
        // marginTop: height(29.09),
    },
    detailsText: {
        color: Colors.darkBlue,
        alignSelf: "center",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontStyle: "normal",
        // fontWeight: "bold",
        marginTop: height(0.85),
    },

    groupView: {
        marginHorizontal: 30,
    },
    textBox: {
        borderRadius: 16,
        borderColor: Colors.gray,
        borderWidth: 1,
        fontSize: 16,
        paddingHorizontal: width(2.7),
        // paddingVertical: height(1.2),
        width: width(73.2),
        height: height(5.15),
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
    },
    icon: {
        // resizeMode: "contain",
        height: height(2.5),
        width: width(5.5),
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
        width: width(59.3),
        color: Colors.black,
        // marginHorizontal: 10,
        padding: 10,
        alignItems: 'center',
    },
    sixteenp: {
        marginVertical: height(1.71),
    },
    viewHeading: {
        fontSize: 16,
        fontWeight: "400",
        color: Colors.gray,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingHorizontal: width(6.97),
        // justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.ltZinc,

    },
    checkbox: {
        alignSelf: 'center',

        // paddingHorizontal: width(6.97),

    },
    label: {
        // padding: 8,
        color: Colors.ltZinc,
    },
    button: {
        flexDirection: "row",
        backgroundColor: Colors.zinc,
        fontSize: 12,
        borderRadius: 16,
        width: width(63.9),
        color: Colors.white,
        marginHorizontal: 10,
        padding: 10,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
    },
})
export default Signup;