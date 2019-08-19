import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Home = props => {
  const { navigation } = props

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Documents"
        onPress={() => {
          navigation.navigate('Document')
        }}
      />
    </View>
  )
}

export default Home
