import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { width, height } from 'react-native-dimension'
import { appImages } from '../../../constants/Images'
import { Colors } from '../../../constants/colors'
import { routes } from '../../../constants/routes'

const Splash = ({ navigation }) => {


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(routes.login)
        }, 2000);

    }, [])

    return (

        <View style={styles.sectioncontainer}>
            <Image style={styles.image} source={appImages.splashLogo} />
            <Image style={styles.leavesTop} source={appImages.leavesTop} />
            <Image style={styles.leavesBottom} source={appImages.leavesBottom} />
        </View>
    )
}
const styles = StyleSheet.create({
    sectioncontainer: {
        flex: 1,
        backgroundColor: Colors.zinc,
        justifyContent: 'center',
        alignItems: "center",
    },
    image: {
        height: height(12.44),
        width: width(39.5),
        resizeMode: "contain",
    },
    leavesTop: {
        width: width(100),
        height: height(29.09),
        position: "absolute",
        top: 0,
        resizeMode: "cover",
    },
    leavesBottom: {
        width: width(100),
        height: height(29.09),
        position: "absolute",
        bottom: 0,
        resizeMode: "cover",
    },
})
export default Splash;