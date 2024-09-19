import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { appImages } from '../../constants/Images'
import { Colors } from '../../constants/colors'
import { Spacer } from '../spacer'
import { height, width } from 'react-native-dimension'

export const TextInputBordered = ({ title, image, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.groupView}>

            <Text >{title}</Text>
            <Spacer />
            <View style={styles.emailView} >
                <Image style={styles.icon} source={image} />
                <View style={styles.space} />
                <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry}
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    groupView: {
        marginHorizontal: 30,
    },
    emailView: {
        // paddingVertical: 32,
        // marginHorizontal: 32,
        borderRadius: 16,
        borderColor: Colors.gray,
        borderWidth: 1,
        fontSize: 22,
        alignItems: "center",
        paddingHorizontal: 12,
        width: width(80),
        height: 48,
        flexDirection: "row",
        backgroundColor: Colors.white,
    },
    icon: {
        resizeMode: "contain",
    },
    space: {
        padding: 6,
    },

    input: {
        fontSize: 14,
        color: Colors.black,
        marginHorizontal: 10,
        padding: 10,
    },




})