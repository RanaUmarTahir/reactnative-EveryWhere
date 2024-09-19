import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/colors'
import { EventCard, EventPic } from '../../../components/eventCard'
import { appImages } from '../../../constants/Images'
import { Spacer } from '../../../components/spacer'

const OpenEventCard = ({ navigation }) => {
  const eventpic = [
    { backgroundImage: appImages.pic1 },
    { backgroundImage: appImages.kartarpur },
    { backgroundImage: appImages.pic1 },
    { backgroundImage: appImages.kartarpur },
    { backgroundImage: appImages.pic1 },
    { backgroundImage: appImages.kartarpur },
    { backgroundImage: appImages.kartarpur },
    { backgroundImage: appImages.pic1 },
  ]
  const renderItem = ({ item }) => {
    return <EventPic backgroundImage={item.backgroundImage} />
  }
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.Header}>Event Memory</Text>
      <Spacer />

      <EventCard backgroundImage={appImages.pic1}
        pinkImage={appImages.add}
        zincImage={appImages.imgFolder}
        name={"Videos"}
        date={" Tuesday, 14 November, 2023"}
        isNew={true}
        totalNumber={'12'}
        style={styles.eventSquare} />

      <Spacer />
      {/* <EventPic backgroundImage={appImages.pic1} backgroundImageb={appImages.kartarpur} style={styles.eventSquare} /> */}
      <FlatList data={eventpic}
        numColumns={2}
        columnWrapperStyle={{ gap: 10, margin: 5, }}
        renderItem={renderItem} />
    </View>
  )
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',

  },
  Header: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.black,
  },
  eventSquare: {

  },
})
export default OpenEventCard