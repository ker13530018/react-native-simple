import React, { useState, Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
} from 'react-native'
import Row from '../components/row'
import {
  CustomHeaderButtons,
  CustomHeaderButton,
  Item,
} from '../components/rightButton'
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

class Document extends Component {
  //  const [documents, setDocument] = useState(init)
  state = { documents: init }

  static navigationOptions = {
    // headerTitle: 'Custom Title',
    // headerTransparent: false,
    headerRight: (
      <CustomHeaderButtons>
        <Item
          title="Add"
          iconName="plus-circle"
          color="#33B8FF"
          onPress={() => console.log('add')}
        />
        <Item
          title="Remove"
          iconName="minus-circle"
          color="#FF4233"
          onPress={() => console.log('remove')}
        />
      </CustomHeaderButtons>
    ),
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={this.state.documents}
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
}

export default Document
