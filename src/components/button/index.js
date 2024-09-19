import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { height, width } from "react-native-dimension"
import { Colors } from '../../constants/colors'

export const ColoredButton = ({ title, image, onPress }) => {
    return (

        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image style={styles.icon} source={image} />
            <View style={styles.space} />
            <Text style={styles.buttonText} >{title}</Text>

        </TouchableOpacity>

    )
}
export const BorderedButton = ({ title, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.createAccount} onPress={onPress}>
            <Image style={styles.icon} source={image} />
            <View style={styles.space} />
            <Text>{title}</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    icon: {
        resizeMode: "contain",
    },
    space: {
        padding: 6,
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
    buttonText: {
        color: Colors.white,
    },
    createAccount: {
        flexDirection: "row",
        backgroundColor: Colors.white,
        fontSize: 12,
        width: width(63.9),
        color: Colors.black,
        borderWidth: 2,
        borderColor: Colors.zinc,
        borderRadius: 16,
        marginHorizontal: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 8,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
    },
})