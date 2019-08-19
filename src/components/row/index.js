import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    // padding: 5,
    height: 100,
  },
  flexCol: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  img: {
    flex: 0.5,
    height: 100,
    // resizeMode: 'cover',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
})

const Row = ({ title, imageSource, description }) => {
  return (
    <View style={styles.flexRow}>
      <Image style={styles.img} source={imageSource} />
      <View style={styles.content}>
        <Text>{title}</Text>
        <Text>{description || 'this field for description text'}</Text>
      </View>
    </View>
  )
}

export default Row
