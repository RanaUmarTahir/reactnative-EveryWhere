import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'
import { appImages } from '../../constants/Images'
import { height, width } from "react-native-dimension"
import { Spacer, Wspacer } from '../spacer'
import Navigation from '../../navigations'
import { routes } from '../../constants/routes'

export const EventCard = ({ backgroundImage, pinkImage, zincImage, name, date, isNew, totalNumber, location }) => {
    return (<View>
        <TouchableOpacity style={styles.imgView} onPress={location}>
            <Image style={styles.img} source={backgroundImage} />
            <View style={styles.rowView}>
                <TouchableOpacity style={styles.pinkButton} >
                    <Text style={{ color: Colors.white }}>{isNew}</Text>
                    <Image source={pinkImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.zincButton}>
                    <Text style={{ color: Colors.white }}>{totalNumber}</Text>
                    <Image source={zincImage} />
                </TouchableOpacity>
            </View>
            <Text style={styles.pheader}>{name}</Text>
            <Spacer />
            <Text style={styles.pbheader}>{date}</Text>
        </TouchableOpacity>
        <Spacer />
    </View >
    )
}

const styles = StyleSheet.create({
    imgView: {
        resizeMode: "contain",
        height: height(21.4),
        width: width(77.9),
        borderRadius: 16,
        padding: 10,
    },
    rowView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    img: {
        height: height(21.4),
        width: width(77.9),
        borderRadius: 16,
        resizeMode: "center",
        position: "absolute",
    },
    pinkButton: {
        flexDirection: "row",
        height: height(3.4),
        width: width(18.6),
        backgroundColor: Colors.pink,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    zincButton: {
        flexDirection: "row",
        height: height(3.4),
        width: width(18.6),
        backgroundColor: Colors.zinc,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    pheader: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 50,

    },
    pbheader: {
        fontSize: 14,
        color: Colors.white,
        alignSelf: "center",
        // margin: 60,
    },
})

export const EventPic = ({ backgroundImage, backgroundImageb }) => {
    return (<View>
        <TouchableOpacity style={stylesi.imgView} >
            <Image style={stylesi.img} source={backgroundImage} />
        </TouchableOpacity>
    </View>
    )
}
const stylesi = StyleSheet.create({
    imgView: {
        resizeMode: "contain",
        height: height(17.70),
        width: width(38.37),
        borderRadius: 16,
        backgroundColor: Colors.darkBlue,
        // padding: 10,
        // flexDirection: "row",
    },

    img: {
        height: height(17.70),
        width: width(38.37),
        borderRadius: 16,
        resizeMode: "center",
        // position: "absolute",
    },

    pheader: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 50,

    },
    pbheader: {
        fontSize: 14,
        color: Colors.white,
        alignSelf: "center",
        // margin: 60,
    },
})