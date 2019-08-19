import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import Row from '../components/row'

const init = [
  {
    id: '1',
    title: 'Dog',
    imageSource: require('../../assets/forest.jpg'),
    description: 'example document component',
  },
  {
    id: '2',
    title: 'Cat',
    imageSource: require('../../assets/beach.jpg'),
    description: 'example document component',
  },
  {
    id: '3',
    title: 'Rabbit',
    imageSource: require('../../assets/mountain.jpg'),
    description: 'example document component',
  },
]

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
})

const Document = props => {
  const [documents, setDocument] = useState(init)

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <FlatList
        data={documents}
        keyExtractor={item => item.id}
        renderItem={({ index, item }) => {
          const { title, imageSource, description } = item
          return (
            <Row
              title={title}
              imageSource={imageSource}
              description={`${index + 1}. ${description}`}
            />
          )
        }}
      />
    </ScrollView>
  )
}

export default Document
