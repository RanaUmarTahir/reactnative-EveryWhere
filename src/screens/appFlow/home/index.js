import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/colors'
import { appImages } from '../../../constants/Images'
import { height, width } from 'react-native-dimension'
import { Spacer, Wspacer } from '../../../components/spacer'
import { Searchbar } from 'react-native-paper';
import { TextInputBordered } from '../../../components/textInput'
import { EventCard } from '../../../components/eventCard'
import { routes } from '../../../constants/routes';


const Home = ({ navigation }) => {
    const eventCard = [
        {
            backgroundImage: appImages.pic1,
            pinkImage: appImages.add,
            zincImage: appImages.imgFolder,
            name: "Weekend Camping",
            date: " Monday, 13 November, 2023",
            isNew: true,
            totalNumber: 65,
            location: () => { navigation.navigate(routes.openEvent) },
        },
        {
            backgroundImage: appImages.pic1,
            pinkImage: appImages.add,
            zincImage: appImages.imgFolder,
            name: "Photography",
            date: " Friday, 10 November, 2023",
            isNew: true,
            totalNumber: 90,
            location: () => { navigation.navigate(routes.openEvent) },
        },
        {
            backgroundImage: appImages.pic1,
            pinkImage: appImages.add,
            zincImage: appImages.imgFolder,
            name: "Videos",
            date: " Tuesday, 14 November, 2023",
            isNew: true,
            totalNumber: 12,
            location: () => { navigation.navigate(routes.openEvent) },
        },
        {
            backgroundImage: appImages.pic1,
            pinkImage: appImages.add,
            zincImage: appImages.imgFolder,
            name: "Hiking",
            date: " Wednesday, 1 November, 2023",
            isNew: true,
            totalNumber: 45,
            location: () => { navigation.navigate(routes.openEvent) },
        },
    ]
    const renderItem = ({ item }) => {
        return <EventCard backgroundImage={item.backgroundImage}
            pinkImage={item.pinkImage}
            zincImage={item.zincImage}
            name={item.name}
            isNew={item.isNew}
            totalNumber={item.totalNumber}
            date={item.date}
            location={item.location} />
    }
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <ScrollView>
            <View style={styles.sectionContainer}>
                <View style={styles.topView}>
                    <View >
                        <Text style={styles.header}>Welcome Back John!</Text>
                        <Text style={styles.bheader}>Choose an event to view your memories.</Text>
                    </View>
                    <Wspacer totalWidth={width(3.48)} />
                    <View style={styles.iconView}>
                        <Image source={appImages.notification} />
                    </View>
                    <Wspacer totalWidth={width(3.48)} />
                    <View style={styles.iconView}>
                        <Image source={appImages.simpleUser} />
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Spacer totalHeight={height(3.21)} />
                    <TextInputBordered placeholder={'Search'} />

                    {/* <Spacer totalHeight={height(3.21)} /> */}

                    {/* <View style={styles.imgView}>
                    <Image style={styles.img} source={appImages.pic1} />
                    <View style={styles.rowView}>
                        <TouchableOpacity style={styles.pinkButton}>
                            <Text style={{ color: Colors.white }}>New</Text>
                            <Image source={appImages.add} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.zincButton}>
                            <Text style={{ color: Colors.white }}>65</Text>
                            <Image source={appImages.imgFolder} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.pheader}>Weekend Camping</Text>
                    <Spacer />
                    <Text style={styles.pbheader}>Day, Date</Text>
                </View> */}
                    <Spacer totalHeight={height(3.21)} />

                    <FlatList data={eventCard} renderItem={renderItem} />



                    {/* <View style={styles.imgView}>
                    <Image style={styles.img} source={appImages.pic1} />
                    <View style={styles.rowView}>
                        <TouchableOpacity style={styles.pinkButton}>
                            <Text style={{ color: Colors.white }}>New</Text>
                            <Image source={appImages.add} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.zincButton}>
                            <Text style={{ color: Colors.white }}>65</Text>
                            <Image source={appImages.imgFolder} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.pheader}>Weekend Camping</Text>
                    <Spacer />
                    <Text style={styles.pbheader}>Day, Date</Text>
                </View> */}

                    {/* <Spacer totalHeight={height(3.21)} /> */}

                    {/* <View style={styles.imgView}>
                    <Image style={styles.img} source={appImages.pic1} />
                    <View style={styles.rowView}>
                        <TouchableOpacity style={styles.pinkButton}>
                            <Text style={{ color: Colors.white }}>New</Text>
                            <Image source={appImages.add} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.zincButton}>
                            <Text style={{ color: Colors.white }}>65</Text>
                            <Image source={appImages.imgFolder} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.pheader}>Weekend Camping</Text>
                    <Spacer />
                    <Text style={styles.pbheader}>Day, Date</Text>
                </View> */}
                    <TouchableOpacity style={styles.iconButton}>
                        <Image source={appImages.qr} />
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.white,
    },
    topView: {
        flexDirection: "row",

    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
    },
    bheader: {
        fontSize: 12,
    },
    iconView: {
        height: height(4.7),
        width: width(10.2),
        borderRadius: 22,
        backgroundColor: Colors.offwhite,
        alignItems: "center",
        justifyContent: "center",
    },
    iconButton: {
        position: "absolute",
        height: height(5.0),
        width: width(10.2),
        borderRadius: 22,
        backgroundColor: Colors.zinc,
        alignItems: "center",
        justifyContent: "center",
        bottom: height(6.7),
        alignSelf: "flex-end",
    },
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
export default Home;