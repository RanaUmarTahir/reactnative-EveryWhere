import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import { height, width } from "react-native-dimension"
import { Colors } from '../../constants/colors'
import { Spacer } from '../spacer'

export const SuccessBottomSheet = ({ refRBSheet }) => {
    return (
        <View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >

                <View style={styles.sectionContainer}>
                    <Text style={styles.header}>Success!</Text>
                    <Spacer />
                    <Text style={styles.text}>A password reset link has been sent on your email.</Text>
                </View>

            </RBSheet>
        </View>
    )
}
const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: height(10),
    },
    text: {
        alignSelf: "center",
        fontSize: 14,

    },


})